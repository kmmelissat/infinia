"use client";

import { gsap } from "gsap";

const TechHub = () => {
  return (
    <div className="relative h-96 overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        {/* Enhanced React Icon */}
        <div
          className="absolute top-16 left-16 w-16 h-16 backdrop-blur-xl bg-blue-500/20 border border-blue-400/40 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 group cursor-pointer parallax-element"
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.2,
              rotation: 10,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
        >
          <svg
            className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
          </svg>
        </div>

        {/* Node.js Icon */}
        <div className="absolute top-8 right-20 w-14 h-14 backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-green-500/20">
          <svg
            className="w-7 h-7 text-green-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46.85 0 1.31-.52 1.31-1.42V9.47c0-.13-.11-.24-.24-.24H7.52c-.13 0-.24.11-.24.24v8.04c0 .44-.46.64-.85.37L4.51 16.76c-.07-.04-.11-.11-.11-.19V7.99c0-.08.04-.15.11-.19l7.44-4.29c.14-.08.32-.08.46 0l7.44 4.29c.07.04.11.11.11.19v8.58c0 .08-.04.15-.11.19l-7.44 4.29c-.14.08-.32.08-.46 0L9.4 19.94c-.09-.05-.2-.05-.29 0-.2.12-.24.16-.81.46-.14.07-.35.17-.35.17-.07.04-.07.04-.14.04 0 0-.07 0-.07-.04l-1.95-1.12c-.48-.28-.78-.8-.78-1.36V7.51c0-.56.3-1.08.78-1.36l7.44-4.3c.23-.13.51-.2.78-.2z" />
          </svg>
        </div>

        {/* Database Icon */}
        <div
          className="absolute bottom-20 left-24 w-12 h-12 backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-purple-500/20"
          style={{ animationDelay: "0.5s" }}
        >
          <svg
            className="w-6 h-6 text-purple-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4M4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>

        {/* Mobile Icon */}
        <div
          className="absolute bottom-16 right-16 w-14 h-14 backdrop-blur-md bg-pink-500/20 border border-pink-400/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-pink-500/20"
          style={{ animationDelay: "1s" }}
        >
          <svg
            className="w-7 h-7 text-pink-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 19H7V5h10v14M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" />
          </svg>
        </div>

        {/* Cloud Icon */}
        <div
          className="absolute top-32 right-32 w-16 h-16 backdrop-blur-md bg-cyan-500/20 border border-cyan-400/30 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-cyan-500/20"
          style={{ animationDelay: "1.5s" }}
        >
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </div>

        {/* API Icon */}
        <div
          className="absolute top-24 left-1/2 transform -translate-x-1/2 w-12 h-12 backdrop-blur-md bg-orange-500/20 border border-orange-400/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-orange-500/20"
          style={{ animationDelay: "2s" }}
        >
          <svg
            className="w-6 h-6 text-orange-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18C19.1,20 20,19.11 20,18Z" />
          </svg>
        </div>

        {/* TypeScript Icon */}
        <div
          className="absolute top-4 left-32 w-14 h-14 backdrop-blur-md bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-blue-600/20 parallax-element"
          style={{ animationDelay: "0.8s" }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.15,
              rotation: -5,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
        >
          <svg
            className="w-7 h-7 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
          </svg>
        </div>

        {/* Next.js Icon */}
        <div
          className="absolute bottom-8 left-8 w-16 h-16 backdrop-blur-md bg-gray-800/30 border border-gray-600/40 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-gray-800/20 parallax-reverse"
          style={{ animationDelay: "1.2s" }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.1,
              rotation: 5,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.8538.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945C13.1595.2361 12.3404.0649 11.5725 0z" />
          </svg>
        </div>

        {/* Docker Icon */}
        <div
          className="absolute top-40 right-8 w-15 h-15 backdrop-blur-md bg-blue-400/20 border border-blue-300/30 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-blue-400/20 parallax-element"
          style={{ animationDelay: "1.8s" }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.2,
              rotation: -10,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
        >
          <svg
            className="w-8 h-8 text-blue-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
          </svg>
        </div>

        {/* AWS Icon */}
        <div
          className="absolute bottom-32 right-8 w-14 h-14 backdrop-blur-md bg-yellow-500/20 border border-yellow-400/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-yellow-500/20 parallax-reverse"
          style={{ animationDelay: "2.5s" }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.15,
              rotation: 8,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
        >
          <svg
            className="w-7 h-7 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.763 10.036c0 .296.032.535.088.718a4.678 4.678 0 00.256.718c.04.08.056.162.056.242 0 .118-.064.2-.193.2-.096 0-.193-.040-.29-.117a3.379 3.379 0 01-.602-.795A4.423 4.423 0 015.89 9.712a4.836 4.836 0 01-.193-1.416c0-.493.064-.926.18-1.22.12-.32.285-.590.49-.83.22-.24.456-.42.733-.52.265-.1.548-.16.863-.16.653 0 1.006.248 1.006.69 0 .174-.056.31-.168.42-.112.11-.24.17-.38.17-.118 0-.216-.04-.29-.11a.402.402 0 01-.118-.29c0-.11.024-.21.088-.31.056-.08.12-.17.18-.26.04-.06.056-.13.056-.2 0-.15-.15-.22-.35-.22-.216 0-.415.07-.583.2-.168.13-.31.29-.415.48-.118.19-.193.4-.242.64-.048.24-.08.49-.08.75zm2.24 2.706c0 .616.098 1.08.29 1.388.18.31.454.465.78.465.216 0 .406-.048.573-.15.168-.1.31-.24.415-.42.118-.18.193-.38.242-.62.048-.24.08-.49.08-.75 0-.616-.098-1.08-.29-1.388-.18-.31-.454-.465-.78-.465-.216 0-.406.048-.573.15-.168.1-.31.24-.415.42-.118.18-.193.38-.242.62-.048.24-.08.49-.08.75zm-.29-.002c0-.318.024-.614.088-.888.056-.274.15-.513.265-.718.12-.205.275-.365.456-.48.18-.118.4-.178.65-.178.48 0 .853.19 1.108.57.256.38.402.916.402 1.608 0 .318-.024.614-.088.888-.056.274-.15.513-.265.718-.12.205-.275.365-.456.48-.18.118-.4.178-.65.178-.48 0-.853-.19-1.108-.57-.256-.38-.402-.916-.402-1.608zm8.506-2.618c.24 0 .402.08.504.226.096.15.15.34.15.58v3.24c0 .15-.04.27-.104.334-.064.064-.15.096-.25.096s-.19-.032-.25-.096c-.064-.064-.104-.184-.104-.334v-.5c-.118.284-.29.507-.52.67-.216.163-.475.244-.78.244-.618 0-1.108-.19-1.47-.57-.36-.38-.544-.916-.544-1.608 0-.692.184-1.228.544-1.608.362-.38.852-.57 1.47-.57.305 0 .564.081.78.244.23.163.402.386.52.67v-.5c0-.15.04-.27.104-.334.064-.064.15-.096.25-.096zm-.618 2.292c0-.616-.098-1.08-.29-1.388-.18-.31-.454-.465-.78-.465-.216 0-.406.048-.573.15-.168.1-.31.24-.415.42-.118.18-.193.38-.242.62-.048.24-.08.49-.08.75 0 .616.098 1.08.29 1.388.18.31.454.465.78.465.216 0 .406-.048.573-.15.168-.1.31-.24.415-.42.118-.18.193-.38.242-.62.048-.24.08-.49.08-.75zm2.24 1.388c.118.15.275.226.456.226.118 0 .23-.032.334-.096.104-.064.2-.15.29-.258l.193.15c.064.048.096.118.096.193 0 .104-.064.2-.193.29-.13.088-.275.15-.435.193-.16.04-.32.064-.48.064-.618 0-1.108-.19-1.47-.57-.36-.38-.544-.916-.544-1.608 0-.692.184-1.228.544-1.608.362-.38.852-.57 1.47-.57.305 0 .564.081.78.244.23.163.402.386.52.67v-.5c0-.15.04-.27.104-.334.064-.064.15-.096.25-.096s.19.032.25.096c.064.064.104.184.104.334v3.24c0 .15-.04.27-.104.334-.064.064-.15.096-.25.096s-.19-.032-.25-.096c-.064-.064-.104-.184-.104-.334v-.5c-.118.284-.29.507-.52.67-.216.163-.475.244-.78.244-.305 0-.564-.081-.78-.244-.23-.163-.402-.386-.52-.67zm.618-.096c0 .616.098 1.08.29 1.388.18.31.454.465.78.465.216 0 .406-.048.573-.15.168-.1.31-.24.415-.42.118-.18.193-.38.242-.62.048-.24.08-.49.08-.75 0-.616-.098-1.08-.29-1.388-.18-.31-.454-.465-.78-.465-.216 0-.406.048-.573.15-.168.1-.31.24-.415.42-.118.18-.193.38-.242.62-.048.24-.08.49-.08.75z" />
          </svg>
        </div>

        {/* GraphQL Icon */}
        <div
          className="absolute top-12 right-1/3 w-13 h-13 backdrop-blur-md bg-pink-600/20 border border-pink-500/30 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-pink-600/20 parallax-element"
          style={{ animationDelay: "3s" }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.1,
              rotation: -8,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
        >
          <svg
            className="w-7 h-7 text-pink-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.051 2.751l4.935 2.85c.816.471 1.32 1.341 1.32 2.278v5.702c0 .937-.504 1.807-1.32 2.278l-4.935 2.85c-.816.471-1.821.471-2.637 0L6.514 15.86c-.816-.471-1.32-1.341-1.32-2.278V7.88c0-.937.504-1.807 1.32-2.278L11.449 2.75c.816-.471 1.821-.471 2.637 0z" />
          </svg>
        </div>

        {/* MongoDB Icon */}
        <div
          className="absolute bottom-4 left-1/3 w-12 h-12 backdrop-blur-md bg-green-600/20 border border-green-500/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-green-600/20 parallax-reverse"
          style={{ animationDelay: "3.5s" }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.2,
              rotation: 12,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
        >
          <svg
            className="w-6 h-6 text-green-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z" />
          </svg>
        </div>

        {/* Git Icon */}
        <div
          className="absolute top-2 left-1/4 w-11 h-11 backdrop-blur-md bg-red-500/20 border border-red-400/30 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-red-500/20 parallax-element"
          style={{ animationDelay: "4s" }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.15,
              rotation: -12,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
        >
          <svg
            className="w-5 h-5 text-red-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
          </svg>
        </div>

        {/* Tailwind CSS Icon */}
        <div
          className="absolute bottom-12 right-1/4 w-13 h-13 backdrop-blur-md bg-teal-500/20 border border-teal-400/30 rounded-2xl flex items-center justify-center animate-pulse shadow-lg shadow-teal-500/20 parallax-reverse"
          style={{ animationDelay: "4.5s" }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.1,
              rotation: 6,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
        >
          <svg
            className="w-7 h-7 text-teal-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
        </div>

        {/* Firebase Icon */}
        <div
          className="absolute top-36 left-4 w-12 h-12 backdrop-blur-md bg-yellow-600/20 border border-yellow-500/30 rounded-2xl flex items-center justify-center animate-bounce shadow-lg shadow-yellow-600/20 parallax-element"
          style={{ animationDelay: "5s" }}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.15,
              rotation: -15,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          }}
        >
          <svg
            className="w-6 h-6 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5.803 21.066l2.756-4.756L12.618 4.49a.371.371 0 01.664 0L18.197 16.31l2.756 4.756a.743.743 0 01-.332 1.1L12 24.165l-8.621-1.999a.743.743 0 01-.332-1.1L5.803 21.066z" />
          </svg>
        </div>

        {/* Enhanced Connecting Lines Network */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="lineGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="lineGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Main hub connections radiating from center */}
          <path
            d="M 192 192 L 100 80"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            opacity="0.6"
          />
          <path
            d="M 192 192 L 320 60"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
            opacity="0.6"
          />
          <path
            d="M 192 192 L 350 160"
            stroke="url(#lineGradient2)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
            opacity="0.6"
          />
          <path
            d="M 192 192 L 320 320"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
            opacity="0.6"
          />
          <path
            d="M 192 192 L 80 320"
            stroke="url(#lineGradient3)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
            opacity="0.6"
          />
          <path
            d="M 192 192 L 40 280"
            stroke="url(#lineGradient2)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "2.5s" }}
            opacity="0.6"
          />
          <path
            d="M 192 192 L 280 40"
            stroke="url(#lineGradient3)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "3s" }}
            opacity="0.6"
          />
          <path
            d="M 192 192 L 350 280"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "3.5s" }}
            opacity="0.6"
          />

          {/* Curved connecting paths between technologies */}
          <path
            d="M 100 80 Q 200 120 320 60"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "4s" }}
            opacity="0.4"
          />
          <path
            d="M 320 60 Q 350 120 350 160"
            stroke="url(#lineGradient2)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "4.5s" }}
            opacity="0.4"
          />
          <path
            d="M 350 160 Q 320 240 320 320"
            stroke="url(#lineGradient3)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "5s" }}
            opacity="0.4"
          />
          <path
            d="M 320 320 Q 200 340 80 320"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "5.5s" }}
            opacity="0.4"
          />
          <path
            d="M 80 320 Q 60 300 40 280"
            stroke="url(#lineGradient2)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "6s" }}
            opacity="0.4"
          />
          <path
            d="M 40 280 Q 120 200 100 80"
            stroke="url(#lineGradient3)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "6.5s" }}
            opacity="0.4"
          />

          {/* Additional network connections */}
          <path
            d="M 280 40 Q 300 80 350 160"
            stroke="url(#lineGradient)"
            strokeWidth="0.8"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "7s" }}
            opacity="0.3"
          />
          <path
            d="M 350 280 Q 280 300 320 320"
            stroke="url(#lineGradient2)"
            strokeWidth="0.8"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "7.5s" }}
            opacity="0.3"
          />

          {/* Pulsing data flow indicators */}
          <circle
            cx="192"
            cy="192"
            r="3"
            fill="#8b5cf6"
            opacity="0.8"
            className="animate-ping"
          />
          <circle
            cx="100"
            cy="80"
            r="2"
            fill="#06b6d4"
            opacity="0.6"
            className="animate-ping"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="350"
            cy="160"
            r="2"
            fill="#10b981"
            opacity="0.6"
            className="animate-ping"
            style={{ animationDelay: "2s" }}
          />
          <circle
            cx="320"
            cy="320"
            r="2"
            fill="#f59e0b"
            opacity="0.6"
            className="animate-ping"
            style={{ animationDelay: "3s" }}
          />
        </svg>

        {/* Floating Particles */}
        <div className="absolute top-12 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div
          className="absolute bottom-32 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-24 h-24 backdrop-blur-xl bg-gradient-to-br from-purple-primary/30 to-purple-secondary/30 border-2 border-purple-primary/50 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-primary/30 animate-pulse">
          <svg
            className="w-12 h-12 text-purple-light"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TechHub;
