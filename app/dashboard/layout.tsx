import SideNav from "../ui/dashboard/sidenav";

/*
  네비게이션 컴포넌트를 가져와 모든 컴포넌트 레이아웃의 일부가 되고
  children 속성을 받음
*/

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-glow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}