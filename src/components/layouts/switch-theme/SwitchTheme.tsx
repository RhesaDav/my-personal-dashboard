'use client'
import React, { Fragment, useEffect, useState } from 'react'
import { useLocalStorage } from '@/hook/UseLocalStorage'

type Props = {}

export const SwitchTheme = (props: Props) => {
      // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ?? localStorage.getItem("theme") ? localStorage.getItem("theme") : "aqua"
  );
  // const [theme, setTheme] = useLocalStorage("theme", "aqua")

  // update state on toggle
  const handleToggle = (e:any) => {
    if (e.target.checked) {
      setTheme("aqua");
    } else {
      setTheme("dracula");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    typeof window !== 'undefined' ??localStorage.setItem("theme", theme as string);
    const localTheme = typeof window !== 'undefined' ?? localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    const querySelector = document.querySelector("html") as HTMLElement
    querySelector.setAttribute("data-theme", theme as string);
  }, [theme]);
  return (
    <Fragment>
        {/* {theme === 'dracula' && <h1>{theme}</h1>} */}
        <input onChange={handleToggle} type="checkbox" className="toggle toggle-lg toggle-primary" checked={theme === "dracula" ? false : true}
        />
        {/* {theme === 'aqua' && <h1>{theme}</h1>} */}
    </Fragment>
  )
}