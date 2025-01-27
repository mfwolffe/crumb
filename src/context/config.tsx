import { useBashContext } from "./BashContext";


const PS1 = () => {
  const { state } = useBashContext();

  return (
    <span className="inline-block px-3 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 rounded-l-md">
      <span className={ state.ps1uColorClass }>{ state.userName }</span>@<span className={ state.ps1hColorClass }>{ state.hostName }</span>:~$
    </span>
  )
}


export { PS1, }