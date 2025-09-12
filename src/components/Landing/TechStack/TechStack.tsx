"use client";

import { useState, useEffect } from "react";

// Tech Logo Components
const TechLogos = {
  React: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
    </svg>
  ),
  NextJS: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.0803-.0516c-.0516-.0336-.0939-.0822-.1145-.1262l-.0281-.0723.0188-4.6901.0235-4.6901.0516-.0659c.0329-.0496.1145-.1262.1938-.1768.1194-.0665.1573-.0735.4997-.0735.4142 0 .5078.0187.6625.1262.0454.0329 1.821 2.7214 3.9454 5.9752 2.1244 3.2538 4.9543 7.5923 6.2847 9.6417.7931 1.2221 1.4555 2.2313 1.4695 2.2313.0188 0 .3642-.2371.7668-.5281 1.0663-.7736 2.201-1.9087 2.9772-2.9772 1.6455-2.2650 2.6034-5.0198 2.6034-7.4851 0-.7926-.0516-1.9087-.1145-2.4211-.652-4.506-3.8591-8.2919-8.2087-9.6945-.7789-.2511-1.6-.4223-2.5337-.5255-.3636-.04-1.9354-.04-2.299 0zm5.5847 8.786c.0939.0516.1875.1573.2183.2368.0235.0516.0281 1.5787.0188 4.6901l-.0141 4.6198-.7595-1.1938-.7595-1.1938v-3.1459c0-1.7476.0047-3.2538.0141-3.35.0188-.1573.0516-.2368.1408-.3237.0939-.0939.1664-.1145.3871-.1145.1664 0 .2929.0187.3538.0516z" />
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  NodeJS: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
    </svg>
  ),
  PostgreSQL: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M23.111 5.441c-.777-1.337-2.096-2.217-3.563-2.217-.766 0-1.52.267-2.127.753-.607-.486-1.361-.753-2.127-.753-1.467 0-2.786.88-3.563 2.217-.777-1.337-2.096-2.217-3.563-2.217-.766 0-1.52.267-2.127.753-.607-.486-1.361-.753-2.127-.753C2.447 3.224.889 4.782.889 6.749c0 1.967 1.558 3.525 3.525 3.525.766 0 1.52-.267 2.127-.753.607.486 1.361.753 2.127.753 1.467 0 2.786-.88 3.563-2.217.777 1.337 2.096 2.217 3.563 2.217.766 0 1.52-.267 2.127-.753.607.486 1.361.753 2.127.753 1.967 0 3.525-1.558 3.525-3.525 0-1.967-1.558-3.525-3.525-3.525z" />
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.071-.2.071-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.135-.144-.296-.2-.495-.503.593-1.135.889-1.887.889-.537 0-.967-.152-1.279-.465-.312-.312-.47-.728-.47-1.247 0-.551.194-.997.591-1.334.398-.337.927-.506 1.599-.506.224 0 .455.016.695.056.239.04.487.088.743.152v-.506c0-.528-.11-.896-.334-1.112-.231-.216-.622-.32-1.183-.32-.255 0-.518.032-.782.088-.264.056-.51.127-.734.224-.112.048-.194.08-.247.096-.056.016-.096.024-.128.024-.112 0-.168-.08-.168-.248v-.391c0-.128.016-.224.056-.28.04-.056.112-.112.207-.16.255-.135.567-.248.926-.336.367-.096.75-.144 1.15-.144.88 0 1.527.2 1.943.597.41.397.622.997.622 1.797v2.368h.01zm-2.583.927c.216 0 .44-.04.678-.12.239-.08.454-.216.646-.415.12-.127.207-.272.247-.44.04-.167.064-.36.064-.583v-.28c-.184-.048-.383-.088-.583-.112-.2-.024-.383-.032-.55-.032-.394 0-.678.08-.862.248-.184.168-.272.406-.272.726 0 .296.072.518.207.67.144.16.35.24.625.24zm5.097.705c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55c-.048-.16-.072-.264-.072-.32 0-.128.064-.2.191-.2h.783c.151 0 .255.024.31.08.065.048.113.16.16.311l1.447 5.713 1.343-5.713c.04-.16.088-.264.151-.311.064-.048.167-.08.318-.08h.638c.151 0 .255.024.318.08.064.048.120.16.152.311l1.359 5.785 1.495-5.785c.048-.16.104-.264.168-.311.063-.048.159-.08.303-.08h.742c.128 0 .2.064.2.2 0 .04-.009.08-.017.128-.008.048-.024.112-.056.2l-2.042 6.528c-.048.16-.104.264-.168.311-.064.048-.168.08-.312.08h-.687c-.151 0-.255-.024-.318-.08-.064-.056-.12-.16-.152-.32L11.97 6.24l-1.327 5.704c-.04.16-.088.264-.151.32-.064.056-.167.08-.318.08h-.687zm8.222.16c-.335 0-.67-.04-.997-.12-.327-.08-.583-.16-.758-.256-.112-.064-.191-.135-.231-.2-.04-.064-.064-.16-.064-.28v-.407c0-.168.064-.248.183-.248.048 0 .096.008.151.024.056.016.127.048.2.08.271.12.56.215.862.279.304.064.606.096.909.096.48 0 .854-.088 1.111-.264.256-.176.39-.43.39-.75 0-.224-.064-.41-.2-.566-.135-.16-.375-.304-.718-.44l-1.047-.32c-.535-.168-.927-.42-1.175-.75-.248-.335-.375-.718-.375-1.151 0-.335.072-.630.207-.886.144-.256.335-.48.575-.654.24-.184.51-.32.83-.415.32-.096.65-.144.99-.144.144 0 .287.008.431.032.144.024.28.048.41.08.128.032.248.072.36.112.111.04.2.08.264.127.112.08.2.16.247.248.048.088.08.2.08.336v.375c0 .168-.056.256-.175.256-.064 0-.167-.024-.294-.088-.295-.135-.622-.2-.973-.2-.44 0-.782.072-1.023.224-.24.151-.36.375-.36.67 0 .224.072.415.216.583.144.168.4.32.767.44l1.023.32c.527.168.911.404 1.151.71.24.304.36.67.36 1.087 0 .343-.072.654-.207.926-.144.272-.336.51-.583.702-.248.2-.543.36-.886.463-.36.112-.734.168-1.127.168z" />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.033-1.01.098-.332-2.098-1.725-3.098-1.725-3.098l-.345-.296-.296.345s-.676 1.09-.65 2.715c.011.56.17 1.074.46 1.508-.387.22-.977.458-1.944.458H.571a.571.571 0 00-.571.571c.001 1.704.438 3.391 1.291 4.947.85 1.553 2.07 2.863 3.586 3.853 1.518.991 3.21 1.24 4.95 1.24 4.7 0 8.437-2.188 10.06-6.274 1.18.02 2.763 0 3.722-1.498-.013-.02-.02-.033-.033-.051.131-.084.462-.296.994-.87l.199-.24-.296-.199z" />
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
    </svg>
  ),
};

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("tech-stack");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Curated core technologies - more focused selection
  const coreStack = [
    {
      name: "React",
      logo: TechLogos.React,
      color: "from-blue-400 to-blue-600",
      category: "Frontend",
      description: "Biblioteca líder para interfaces de usuario",
    },
    {
      name: "Next.js",
      logo: TechLogos.NextJS,
      color: "from-gray-700 to-gray-900",
      category: "Framework",
      description: "Framework React para producción",
    },
    {
      name: "TypeScript",
      logo: TechLogos.TypeScript,
      color: "from-blue-500 to-blue-700",
      category: "Language",
      description: "JavaScript tipado para mayor robustez",
    },
    {
      name: "Node.js",
      logo: TechLogos.NodeJS,
      color: "from-green-500 to-green-700",
      category: "Backend",
      description: "Runtime de JavaScript del lado del servidor",
    },
    {
      name: "PostgreSQL",
      logo: TechLogos.PostgreSQL,
      color: "from-blue-600 to-blue-800",
      category: "Database",
      description: "Base de datos relacional avanzada",
    },
    {
      name: "AWS",
      logo: TechLogos.AWS,
      color: "from-orange-500 to-orange-700",
      category: "Cloud",
      description: "Plataforma de servicios en la nube",
    },
    {
      name: "Docker",
      logo: TechLogos.Docker,
      color: "from-blue-500 to-blue-700",
      category: "DevOps",
      description: "Containerización para despliegues consistentes",
    },
    {
      name: "Python",
      logo: TechLogos.Python,
      color: "from-yellow-400 to-yellow-600",
      category: "Backend",
      description: "Lenguaje versátil para backend y AI",
    },
  ];

  // Additional technologies that appear on hover
  const extendedStack = [
    "Vue.js",
    "Tailwind CSS",
    "Express",
    "FastAPI",
    "GraphQL",
    "MongoDB",
    "Redis",
    "Supabase",
    "Firebase",
    "Kubernetes",
    "Vercel",
    "GitHub Actions",
    "Prisma",
    "Nest.js",
    "Flutter",
  ];

  return (
    <section
      id="tech-stack"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-primary/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>

        {/* Floating Tech Icons Background */}
        {coreStack.map((tech, index) => (
          <div
            key={`bg-${index}`}
            className="absolute opacity-5 text-white animate-float"
            style={{
              left: `${15 + ((index * 12) % 70)}%`,
              top: `${20 + ((index * 15) % 60)}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${4 + index * 0.5}s`,
            }}
          >
            <div className="w-8 h-8">
              <tech.logo />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center space-x-2 backdrop-blur-md bg-white/5 border border-purple-primary/20 rounded-full px-6 py-3 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-light">
              Stack Tecnológico
            </span>
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Tecnologías
            <span className="block gradient-text">Principales</span>
          </h2>

          <p
            className={`text-lg text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Nuestro stack cuidadosamente seleccionado para crear soluciones
            excepcionales
          </p>
        </div>

        {/* Moving Tech Lines */}
        <div className="relative mb-16 overflow-hidden">
          {/* First Line - Moving Right */}
          <div
            className={`flex items-center space-x-8 mb-8 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center space-x-8 animate-scroll-right">
              {[...coreStack, ...coreStack].map((tech, index) => (
                <div
                  key={`line1-${index}`}
                  className="flex-shrink-0"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div
                    className={`group relative w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30`}
                  >
                    <div className="text-white">
                      <tech.logo />
                    </div>

                    {/* Tooltip */}
                    {hoveredTech === tech.name && (
                      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md border border-purple-primary/30 rounded-lg px-3 py-2 text-xs text-white whitespace-nowrap z-50">
                        <div className="font-semibold">{tech.name}</div>
                        <div className="text-gray-300 text-xs">
                          {tech.category}
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Line - Moving Left */}
          <div
            className={`flex items-center space-x-8 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center space-x-8 animate-scroll-left">
              {[
                ...coreStack.slice().reverse(),
                ...coreStack.slice().reverse(),
              ].map((tech, index) => (
                <div
                  key={`line2-${index}`}
                  className="flex-shrink-0"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div
                    className={`group relative w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30`}
                  >
                    <div className="text-white">
                      <tech.logo />
                    </div>

                    {/* Tooltip */}
                    {hoveredTech === tech.name && (
                      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md border border-purple-primary/30 rounded-lg px-3 py-2 text-xs text-white whitespace-nowrap z-50">
                        <div className="font-semibold">{tech.name}</div>
                        <div className="text-gray-300 text-xs">
                          {tech.category}
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extended Stack Pills */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-gray-400 mb-4">
            Y muchas más tecnologías:
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {extendedStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:border-purple-primary/30 hover:text-white transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${1200 + index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Compact Stats */}
        <div
          className={`mt-16 flex justify-center space-x-8 md:space-x-12 transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { number: "15+", label: "Core Tech" },
            { number: "50+", label: "Total Stack" },
            { number: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl md:text-3xl font-black gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
