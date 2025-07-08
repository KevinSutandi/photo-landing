import { Title, Text, ThemeIcon } from '@mantine/core'

export default function SuccessMessage() {
  return (
    <div className="animate-reveal-scale py-12 text-center">
      <ThemeIcon
        size={64}
        radius="xl"
        color="accent.5"
        className="mx-auto mb-4"
        style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
      >
        <svg
          className="text-accent-gold h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </ThemeIcon>
      <Title order={3} className="text-coffee mb-2 text-xl font-bold">
        Message Sent!
      </Title>
      <Text className="text-dark-coffee">
        Thanks for reaching out. I&apos;ll get back to you within 24 hours.
      </Text>
    </div>
  )
}
