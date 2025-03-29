"use client";
import { Book, Menu, Sunset, Trees, Zap, Languages } from "lucide-react";
// import LanguageToggle from "@/components/LanguageToggle";

import { useTranslations } from "next-intl";



import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
  type?: string;
  content?: string | React.ReactNode;
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}



const Navbar = ({
  logo = {
    url: "/",
    src: "/images/logo_400.png",
    alt: "logo",
    title: "Shadcnblocks.com",
  },

  menu = [
    { title: "home", url: "/" },
    {
      title: "products",
      url: "#",
      type: "products",
      items: [
        {
          title: "Cue",
          url: "#",
          content: (
            <div className="w-4/5 max-w-[600px]  shrink-0 overflow-clip rounded-tl-lg rounded-bl-lg">
              <div className="flex flex-row justify-between">
                <div className="flex  h-full rounded-lg border border-input bg-background p-0 hover:bg-transparent">
                  <div className="w-1/2">
                    <Image
                      alt="Placeholder image"
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover object-center"
                      src="/images/P 790 Studio Hero Image.jpg"
                    />
                  </div>
                  <div className="flex w-1/2 flex-col p-5 xl:p-8">
                    <div className="mb-8 text-xs tracking-widest text-muted-foreground uppercase">
                      For user persona
                    </div>
                    <div className="mt-auto">
                      <div className="mb-4 text-xl">
                        Call to action for user persona
                      </div>
                      <div className="text-sm font-normal text-muted-foreground">
                        Etiam ornare venenatis neque, sit amet suscipit diam
                        pulvinar a.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Gloves",
          content: "Gloves' Content",

          url: "#",
        },
        {
          title: "Table",
          content: "Table's Content",

          url: "#",
        },
        {
          title: "Shafts",
          content: "Shafts' Content",

          url: "#",
        },

        {
          title: "Chalk",
          content: "Chalk's Content",

          url: "#",
        },
      ],
    },
    {
      title: "resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "pricing",
      url: "#",
    },
    {
      title: "news",
      url: "/news",
    },
  ],
}: // auth = {
//   login: { title: "Login", url: "#" },
//   signup: { title: "Sign up", url: "#" },
// },
NavbarProps) => {
  const t = useTranslations("Navbar");

  return (
    <section className="py-3">
      <div className="container flex">
        {/* Desktop Menu */}

        <NavigationMenu className="w-full max-w-none justify-between hidden lg:flex">
          <a href={logo.url} className="flex items-center gap-2  ">
            <Image
              src={logo.src}
              className="h-full w-full object-contain max-h-8"
              style={{ filter: "contrast(999%) grayscale(100%)" }}
              alt={logo.alt}
              width={74}
              height={32}
            />
            {/* <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span> */}
          </a>

          <NavigationMenuList>
            {menu.map((item) => renderMenuItem(item, t(`${item.title}`)))}
          </NavigationMenuList>

          <div className="flex flex-row gap-2">
          
              <Button variant="outline" size="default">
                <Languages className="size-4" /> en
              </Button> 
    
          </div>

          <NavigationMenuViewport className="w-full"></NavigationMenuViewport>
        </NavigationMenu>

        {/* Mobile Menu */}
        <div className="block lg:hidden w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href={logo.url}
              className="flex justify-start items-center  h-full gap-2"
            >
              <Image
                src={logo.src}
                className="max-h-8 object-cover h-full block"
                alt={logo.alt}
                width={73}
                height={32}
              />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a
                      href={logo.url}
                      className="flex items-center h-full gap-2"
                    >
                      <Image
                        src={logo.src}
                        className="max-h-8 object-cover"
                        alt={logo.alt}
                        width={73}
                        height={32}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) =>
                      renderMobileMenuItem(item, t(`${item.title}`))
                    )}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    {/* <LanguageToggle /> */}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, lable: string) => {
  if (item?.type === "products") {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{lable}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground min-w-[calc(100vw-12px)] p-4 lg:p-8 ">
          <div className="flex justify-start items-stretch">
            <div className="pr-4 border-r ">
              {item.items?.map((subItem, index) => (
                <NavigationMenuLink asChild key={subItem.title}>
                  <SubMenuLinkTab item={subItem} index={index} />
                </NavigationMenuLink>
              ))}
            </div>

            <div className="px-8  w-full">
              <div className="flex flex-row gap-4">
                {item.items?.map((subItem, index) => (
                  <div
                    className="  top-0 left-0 w-full h-full"
                    key={`${index}-content`}
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      zIndex: index === 0 ? 10 : 0,
                      display: index === 0 ? "flex" : "none",
                    }}
                  >
                    {" "}
                    {subItem.content}
                  </div>
                ))}
              </div>
            </div>

            <div></div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{lable}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground  !w-80  p-4 lg:p-8 ">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {lable}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, lable: string) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {lable}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {lable}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.icon && <div className="text-foreground">{item.icon}</div>}
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

const SubMenuLinkTab = ({ item, index }: { item: MenuItem; index: number }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground w-40"
      href={item.url}
      data-index={index}
      onMouseEnter={() => {
        console.log("onMouseEnter", index);
      }}
    >
      {item.icon && <div className="text-foreground">{item.icon}</div>}
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
