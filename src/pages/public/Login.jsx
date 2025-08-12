import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { AuthContext } from "@/context/auth" // path adjust kar le
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function Component() {
  const { loginWithGoogle, user, loading } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* Go Back Button */}
      <div className="p-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 justify-center px-4">
        <div className="mx-auto space-y-4 text-center max-w-sm">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Click below to login to your account
            </p>
          </div>

          {/* Google Button */}
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
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
      </div>
    </div>
  )
}
