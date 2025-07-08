import { Title, Text, ThemeIcon } from '@mantine/core'

export default function SuccessMessage() {
  return (
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
  )
} 