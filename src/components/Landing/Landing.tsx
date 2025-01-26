import { useCallback } from "react";
import ShellNav from "../ShellNav/ShellNav"


import { useBashContext } from "@/context/BashContext"

const BashLanding = () => {
  const { dispatch } = useBashContext();

  const handleCommand = useCallback(() => {
    dispatch({ type: "START", payload: true });

  }, [])


  return (
    <>
      <ShellNav placeholder="chmod +x bash-a-crumb.sh && ./bash-a-crumb.sh" />

      <ol className="list-inside list-decimal text-sm text-center sm:text-left">
        <li className="mb-2">
          Execute the command above!
        </li>
        <li>Navigate!</li>
      </ol>
    </>
  )
}

export default BashLanding;
