"use client";
import { useState, useTransition } from "react";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,

  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { setUserLocale } from "@/services/locale";

import { useLocale } from "next-intl";

type Checked = DropdownMenuCheckboxItemProps["checked"]
 

/* ---------------------------------- type ---------------------------------- */
import { Locale, localeLabels } from "@/i18n/config";

export default function MyComponent() {
  const [_, startTransition] = useTransition(); // eslint-disable-line @typescript-eslint/no-unused-vars
  const locale = useLocale();


  const [zh, setZh] = useState<Checked>(locale === "zh")
  const [en, setEn] = useState<Checked>(locale === "en")


 

  function onChange( selectedLocale: Locale) {

    if (selectedLocale === "zh") {  
      setZh(true)
      setEn(false)
    } else {
      setZh(false)
      setEn(true)
    }

    const newLocale = locale === "zh" ? "en" : "zh";

    startTransition(() => {
      setUserLocale(newLocale);
    });
  }

  return (
    //左对齐
    // <DropdownMenu    >
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline">{locale}</Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56">

    //     {Object.entries(localeLabels).map(([locale, label]) => (
    //       <DropdownMenuItem className="cursor-pointer" key={locale} onClick={() => setUserLocale(locale)}  >{label.flag} {label.label}</DropdownMenuItem>
    //     ))  }


    //   </DropdownMenuContent>
    // </DropdownMenu>

    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="sm"> {locale}</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">


      

      <DropdownMenuCheckboxItem
        checked={zh}
        onCheckedChange={() => onChange("zh")}
      >
       {localeLabels.zh.flag} {localeLabels.zh.label}
      </DropdownMenuCheckboxItem>
      <DropdownMenuSeparator />
     
      <DropdownMenuCheckboxItem
        checked={en}
          onCheckedChange={() => onChange("en")}
      >
        {localeLabels.en.flag} {localeLabels.en.label}
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
  );
}
