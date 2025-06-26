// Google Analytics 4 utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-HB6T7FJL99', {
      page_path: url,
    })
  }
}

// Track custom events
export const trackEvent = (
  eventName: string,
  category: string,
  eventParams: Record<string, any> = {}
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, {
      event_category: category,
      ...eventParams,
    })
  }
}

// Track reading requests
export const trackReadingRequest = (question: string) => {
  trackEvent('reading_request', 'click', { question })
}

// Track reading completion
export const trackReadingCompletion = () => {
  trackEvent('reading_completion', 'view', { is_success: true })
}
