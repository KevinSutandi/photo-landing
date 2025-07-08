"use client"

import { useState } from 'react'
import { TextInput, Textarea, Select, Group, Stack, Title, Text, ThemeIcon } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      message: '',
      refferer: '',
    },
    validate: {
      name: (value) => (!value ? 'Name is required' : null),
      email: (value) => (!/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email' : null),
      eventType: (value) => (!value ? 'Please select an event type' : null),
      date: (value) => (!value ? 'Please select a date' : null),
      message: (value) => (!value ? 'Please tell us about your vision' : null),
    },
  })

  const handleSubmit = async (values: typeof form.values) => {
    setIsSubmitting(true)

    try {
      // Simulate form submission with the form values
      console.log('Form submitted with values:', values)
      await new Promise(resolve => setTimeout(resolve, 2000))

      setSubmitted(true)
      notifications.show({
        title: 'Message sent successfully!',
        message: 'Thanks for reaching out. I\'ll get back to you within 24 hours.',
        color: 'coffee',
        autoClose: 5000,
      })

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
        form.reset()
      }, 5000)

    } catch (error) {
      console.error('Form submission error:', error)
      notifications.show({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        color: 'red',
        autoClose: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className="py-5 px-6 bg-gradient-to-t from-cream to-warm-cream h-full">
      <div className="flex justify-center items-center space-x-4 mb-20">
        <div className="w-16 h-0.5 bg-accent-gold"></div>
        <div className="w-2 h-2 bg-accent-gold rounded-full animate-gentle-pulse"></div>
        <div className="w-16 h-0.5 bg-accent-gold"></div>
      </div>
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 animate-reveal-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 font-acumin-pro-bold">
            Made Up Your Mind?
          </h2>
          <p className="text-xl text-dark-coffee max-w-3xl mx-auto leading-relaxed mb-8">
            Let&apos;s create something beautiful together. I&apos;d love to hear about your special moment and how we can capture it perfectly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="animate-reveal-left">
            <div className="bg-warm-white rounded-2xl p-8 warm-shadow-lg">
              <h3 className="text-2xl font-bold text-coffee mb-6 font-acumin-pro-bold">
                Quick Contact
              </h3>


              {submitted ? (
                <div className="text-center py-12 animate-reveal-scale">
                  <ThemeIcon
                    size={64}
                    radius="xl"
                    color="accent.5"
                    className="mx-auto mb-4"
                    style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                  >
                    <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </ThemeIcon>
                  <Title order={3} className="text-xl font-bold text-coffee mb-2">Message Sent!</Title>
                  <Text className="text-dark-coffee">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</Text>
                </div>
              ) : (
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <Stack gap="md">
                    <Group grow>
                      <TextInput
                        label="Your Name"
                        placeholder="John Doe"
                        withAsterisk
                        {...form.getInputProps('name')}
                      />

                      <TextInput
                        label="Email Address"
                        placeholder="john@example.com"
                        type="email"
                        withAsterisk
                        {...form.getInputProps('email')}
                      />
                    </Group>

                    <Group grow>
                      <TextInput
                        label="Phone Number"
                        placeholder="+61 400 000 000"
                        type="tel"
                        {...form.getInputProps('phone')}
                      />

                      <Select
                        label="Event Type"
                        placeholder="Select an event"
                        withAsterisk
                        data={[
                          { value: 'graduation', label: 'Graduation' },
                          { value: 'pre-wedding', label: 'Pre-Wedding' },
                          { value: 'corporate', label: 'Corporate Event' },
                          { value: 'portrait', label: 'Portrait Session' },
                          { value: 'other', label: 'Other' },
                        ]}
                        {...form.getInputProps('eventType')}
                      />
                    </Group>

                    <DateTimePicker required withAsterisk label="Preferred Date" placeholder="Pick date and time" {...form.getInputProps('date')} />

                    <TextInput
                      label="Refferer"
                      placeholder="Where did you hear about me?"
                      {...form.getInputProps('refferer')}
                    />

                    <Textarea
                      label="Tell me about your vision"
                      placeholder="Share your ideas, style preferences, location, and any special moments you'd like to capture..."
                      rows={5}
                      withAsterisk
                      {...form.getInputProps('message')}
                    />


                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-coffee hover:bg-dark-coffee disabled:bg-coffee/70 text-warm-white font-medium py-4 px-6 rounded-lg transition-all duration-300 disabled:cursor-not-allowed cursor-pointer transform hover:scale-105 disabled:scale-100 warm-shadow-lg flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-warm-white/30 border-t-warm-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </Stack>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-reveal-right flex flex-col justify-between gap-y-10 h-full">
            {/* Quick Contact */}
            <div className="bg-warm-white rounded-2xl p-8 warm-shadow-lg">
              <h3 className="text-2xl font-bold text-coffee mb-6 font-acumin-pro-bold">
                Quick Contact
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:kevin@kevinsutandi.com"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-cream hover:bg-soft-beige transition-all duration-300 warm-hover group"
                >
                  <div className="w-12 h-12 bg-coffee/10 group-hover:bg-coffee/20 rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-6 h-6 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-coffee">Email</p>
                    <p className="text-dark-coffee">kevin@kevinsutandi.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/+61412123138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-cream hover:bg-soft-beige transition-all duration-300 warm-hover group"
                >
                  <div className="w-12 h-12 bg-coffee/10 group-hover:bg-coffee/20 rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-6 h-6 text-coffee" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-coffee">WhatsApp</p>
                    <p className="text-dark-coffee">+61 412 123 138</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-cream">
                  <div className="w-12 h-12 bg-coffee/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-coffee">Location</p>
                    <p className="text-dark-coffee">Sydney, Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-warm-white rounded-2xl p-8 warm-shadow-lg">
              <h3 className="text-2xl font-bold text-coffee mb-6 font-acumin-pro-bold">
                Follow My Work
              </h3>

              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/kevinesutandi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-cream hover:bg-soft-beige p-4 rounded-lg transition-all duration-300 transform hover:scale-105 warm-hover text-center group"
                >
                  <div className="w-12 h-12 bg-coffee/10 group-hover:bg-coffee/20 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300">
                    <svg className="w-6 h-6 text-coffee" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <p className="font-medium text-coffee text-sm">@kevinesutandi</p>
                </a>

                <a
                  href="https://gallery.kevinsutandi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-cream hover:bg-soft-beige p-4 rounded-lg transition-all duration-300 transform hover:scale-105 warm-hover text-center group"
                >
                  <div className="w-12 h-12 bg-coffee/10 group-hover:bg-coffee/20 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300">
                    <svg className="w-6 h-6 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-medium text-coffee text-sm">Full Gallery</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}