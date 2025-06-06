import { IconLoaderQuarter } from "@tabler/icons-react";

export default function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-dark/90 backdrop-blur-sm flex justify-center items-center z-50">
      <IconLoaderQuarter  className="animate-spin text-primary-300" size={56}  />
    </div>
  )
}