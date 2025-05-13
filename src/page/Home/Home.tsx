import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/home/Navbar"
const Home = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div>
     <Navbar/>
       {/* <Outlet /> */}
    </div>
 </ThemeProvider>
  )
}

export default Home