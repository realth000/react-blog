import FumikaNavbar from "~/components/navbar.tsx";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <FumikaNavbar></FumikaNavbar>
        {children}
      </div>
    </>
  );
}
