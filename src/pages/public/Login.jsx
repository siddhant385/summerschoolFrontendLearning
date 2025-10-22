import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { AuthContext } from "@/context/auth" // path adjust kar le
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import Updated_Navbar from '@/components/Updated_Navbar'

export default function Component() {
  const { loginWithGoogle, user, loading } = useContext(AuthContext)
  const navigate = useNavigate()

  return (

    <>

      <Updated_Navbar />

      <div className="flex flex-col h-screen bg-gray-50 dark:bg-black pt-12">
        {/* Go Back Button */}

        {/* Main Content */}
        <div className="flex flex-col flex-1 justify-center items-center px-4">
          <div className="mx-auto space-y-4 text-center max-w-sm">
            <div className="space-y-10">
              <h1 className="text-5xl max-md:text-3xl font-bold">Login</h1>
              <p className="text-gray-500 max-md:text-sm text-lg dark:text-gray-400">
                Click below to login to your account
              </p>
            </div>

            {/* Google Button */}
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full flex items-center text-sm justify-center gap-2"
                onClick={loginWithGoogle}
                disabled={loading}
              >
                {loading ? (
                  "Loading..."
                ) : (
                  <>
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    Login or Signup with Google
                  </>
                )}
              </Button>

            </div>

          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mt-10 w-auto"
          >
            <ArrowLeft className="w-4 h-4 " />
            Go Back
          </Button>
        </div>
      </div>
    </>


  )
}