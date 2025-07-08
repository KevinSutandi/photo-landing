"use client"

import { useState } from 'react'
import { TextInput, Textarea, Select, Group, Stack } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import SuccessMessage from './SuccessMessage'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [formStartTime] = useState(Date.now())

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      message: '',
      refferer: '',
      honeypot: '', // Honeypot field - should remain empty
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
      // Prepare submission data with security measures
      const submissionData = {
        ...values,
        submittedAt: formStartTime, // Send when form was loaded for timing analysis
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      setSubmitted(true)
      notifications.show({
        title: 'Message sent successfully!',
        message: 'Thanks for reaching out. I\'ll get back to you within 24 hours.',
        color: 'green',
        autoClose: 5000,
      })

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
        form.reset()
      }, 5000)

    } catch (error) {
      console.error('Form submission error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.'

      notifications.show({
        title: 'Error',
        message: errorMessage,
        color: 'red',
        autoClose: 7000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="animate-reveal-left">
      <div className="bg-warm-white rounded-2xl p-8 warm-shadow-lg">
        <h3 className="text-2xl font-bold text-coffee mb-6 font-acumin-pro-bold">
          Quick Contact
        </h3>

        {submitted ? (
          <SuccessMessage />
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

              {/* Honeypot field - hidden from users, visible to bots */}
              <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                <TextInput
                  label="Leave this field empty"
                  placeholder="Do not fill this field"
                  tabIndex={-1}
                  autoComplete="off"
                  {...form.getInputProps('honeypot')}
                />
              </div>

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
  )
} 