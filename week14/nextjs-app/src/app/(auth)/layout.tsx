export default function Layout({ children }: any) {
  return (
    <div>
      <div className="p-1 border-b w-full text-center">Login Now to get 20% discount</div>
      {children}
    </div>
  )
}
