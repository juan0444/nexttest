// import '@/app/ui/global.css';
// import { inter } from '@/app/ui/';
// /app/layout.tsx에서 <body> 요소에 글꼴을 추가

/*
<body> 요소에 Inter를 추가함으로써 글꼴이 애플리케이션 전체에 
적용됩니다. 여기서는 Tailwind의 antialiased 클래스도 추가 
이 클래스를 사용하는 것이 필수는 아니지만 글꼴을 부드럽게 만들어 줌
*/


/* 
이를 루트 레이아웃이라고 하며, 필수로 존재해야 한다.
루트 레이아웃에 추가한 모든 UI는 모든 페이지에 공유된다.
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} antialiased`} > */}
      <body>
        {children}
        <h1 className="text-blue-500">I'm blue!</h1>
      </body>
    </html>
  );
}
