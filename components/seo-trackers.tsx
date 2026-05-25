export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  )
}

export function GoogleSearchConsoleVerification({ verificationCode }: { verificationCode: string }) {
  return <meta name="google-site-verification" content={verificationCode} />
}

export function BingWebmasterVerification({ verificationCode }: { verificationCode: string }) {
  return <meta name="msvalidate.01" content={verificationCode} />
}
