export const metadata = {
  title: "المسارات المتعددة - ERP",
  description: "نظام إدارة الموارد والمبيعات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
