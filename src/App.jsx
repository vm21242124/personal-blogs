import AdminDashboard from "./pages/admin/AdminDashboard"
import BlogPage from "./BlogPage"

import Navbar from "./Navbar"

function App() {

  return (
    <section className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white min-h-[100vh]">

      <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <main className="mb-auto">
          <AdminDashboard/>
        {/* <Navbar />
        <BlogPage/> */}
        </main>
      </section>
    </section>
  )
}

export default App
