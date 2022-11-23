import Image from "next/image";
import { getDiscordMembers } from "./stats";

export default function Page() {
  return (
    <div>
      <Title />
      <Description />
      <Boxes />
      <Footer />
    </div>
  );
}

const discordColor = "#7392ff";

function Title() {
  return (
    <WithBackground style={{ textAlign: "center", margin: "3rem 0 8rem" }}>
      <h1 style={{ margin: 0 }}>
        <div
          style={{
            display: "inline-flex",
            alignSelf: "center",
            marginRight: ".25em",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
            fill="none"
            style={{ top: ".125em", position: "relative" }}
          >
            <g clipPath="url(#clip0_113_6)">
              <g clipPath="url(#clip1_113_6)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M188.742 24.3943C188.254 24.1035 187.763 23.8157 187.27 23.5308C130.066 -9.49579 56.92 10.1037 23.8934 67.3075C-9.13326 124.511 10.4662 197.657 67.67 230.684C68.1634 230.969 68.6579 231.25 69.1537 231.527C90.8284 220.128 110.794 205.1 128.044 186.714C117.729 186.823 107.251 184.254 97.67 178.723C69.1638 162.264 59.3968 125.814 75.8549 97.3075C92.313 68.8012 128.764 59.0343 157.27 75.4924C166.851 81.0238 174.315 88.8135 179.378 97.801C186.676 73.6689 189.707 48.8648 188.742 24.3943ZM218.409 49.3771C216 87.234 205.053 125.13 184.801 160.208C164.549 195.285 137.204 223.714 105.623 244.728C154.054 253.724 205.014 231.998 231.047 186.907C257.079 141.817 250.415 86.8217 218.409 49.3771Z"
                  fill="#CD4FC0"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_113_6">
                <rect width="256" height="256" fill="white" />
              </clipPath>
              <clipPath id="clip1_113_6">
                <rect
                  width="256"
                  height="256"
                  fill="white"
                  transform="translate(80.6187 -47.7438) rotate(30)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        Code Explainers
      </h1>
    </WithBackground>
  );
}

function Description() {
  return (
    <WithBackground bg={{ color: "#9996" }} fg={{ color: "#999" }}>
      <h2
        style={{
          fontSize: "3.8em",
          textAlign: "center",
          margin: 0,
        }}
      >
        We are a <span style={{ color: "#fafafa" }}>community</span> of
        designers and developers building{" "}
        <span style={{ color: "#fb5fec" }}>
          interactive programming content
        </span>
        .
      </h2>
    </WithBackground>
  );
}
function WithBackground({ children, bg, fg, style, blur = 50 }) {
  return (
    <div style={{ position: "relative", ...style }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          filter: `blur(${blur}px)`,
          zIndex: -1,
          opacity: 0.66,
          userSelect: "none",
          pointerEvents: "none",
          ...bg,
        }}
      >
        {children}
      </div>
      <div style={fg}>{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", marginTop: "4rem", color: "#9999" }}>
      Started by{" "}
      <a href="https://twitter.com/pomber">
        <Image
          style={{ borderRadius: 20, verticalAlign: "middle" }}
          src="/pomber.jpg"
          width={18}
          height={18}
          alt="Picture of pomber"
        />{" "}
        pomber
      </a>
      . Watch this{" "}
      <a href="https://www.youtube.com/watch?v=9BU1fLCumR8">lightning talk</a>{" "}
      for more context.
    </footer>
  );
}

async function Boxes() {
  const discordMembers = await getDiscordMembers();
  return (
    <div style={{ display: "flex", marginTop: "6rem" }}>
      <Box
        backgroundColor={discordColor + "05"}
        style={{ "--hover-color": "#b1c2fd" }}
      >
        <DiscordTitle />
        <div
          style={{
            background: "#4456",
            borderRadius: "100px",
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              marginRight: 6,
              borderRadius: 10,
              background: discordColor,
            }}
          />
          {discordMembers} members
        </div>
        <a
          href="https://discord.gg/DnpTjcRTgG"
          style={{
            color: discordColor,
            background: "transparent",
            border: "1px solid " + discordColor,
            borderRadius: "6px",
            fontWeight: "bold",
            padding: "0.5em 1em",
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          Join our Discord server
        </a>
      </Box>
      <Box
        backgroundColor={"#ed1c24" + "05"}
        style={{ "--hover-color": "#eb979a" }}
      >
        <TinyLetterTitle />
        <div
          style={{
            background: "#5446",
            borderRadius: "100px",
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              marginRight: 6,
              borderRadius: 10,
              background: "#e75156",
            }}
          />
          95 subscribers
        </div>
        <a
          href="https://tinyletter.com/CodeExplainers"
          style={{
            color: "#e75156",
            background: "transparent",
            border: "1px solid " + "#e75156",
            borderRadius: "6px",
            fontWeight: "bold",
            padding: "0.5em 1em",
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          Subscribe to our newsletter
        </a>
      </Box>
    </div>
  );
}

function Box({ children, backgroundColor, style }) {
  return (
    <WithBackground
      blur={28}
      style={{
        flex: 1,
        minWidth: "300px",
        margin: "1rem",
        ...style,
      }}
      fg={{ backdropFilter: "blur(20px)" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid #ddd1",
          padding: "2rem",
          color: "#ddd",
          borderRadius: "6px",
          height: "240px",
          backgroundColor,
        }}
      >
        {children}
      </div>
    </WithBackground>
  );
}

function DiscordTitle({ style }) {
  return (
    <svg
      width="124"
      height="34"
      viewBox="0 0 124 34"
      style={{ color: discordColor }}
    >
      <g fill="currentColor">
        <path d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"></path>
        <path d="M41.2697 9.86615H47.8585C49.4394 9.86615 50.7878 10.1141 51.8883 10.6101C52.9887 11.1061 53.8102 11.7881 54.3527 12.6715C54.8951 13.555 55.1741 14.5624 55.1741 15.7094C55.1741 16.8253 54.8952 17.8328 54.3217 18.7472C53.7482 19.6462 52.8803 20.3746 51.7178 20.9016C50.5554 21.4286 49.1139 21.6921 47.3935 21.6921H41.2697V9.86615ZM47.316 18.6852C48.3854 18.6852 49.2069 18.4217 49.7804 17.8793C50.3539 17.3523 50.6484 16.6083 50.6484 15.6939C50.6484 14.8414 50.3849 14.1594 49.8734 13.648C49.3619 13.1365 48.587 12.873 47.5485 12.873H45.4871V18.6852H47.316Z"></path>
        <path d="M65.4362 21.6774C64.5217 21.4449 63.7003 21.1039 62.9718 20.6389V17.8335C63.5298 18.2675 64.2582 18.6085 65.1882 18.8875C66.1181 19.1665 67.0171 19.306 67.8851 19.306C68.288 19.306 68.598 19.2595 68.7995 19.151C69.001 19.0425 69.1095 18.9185 69.1095 18.7635C69.1095 18.593 69.0475 18.4535 68.939 18.345C68.8305 18.2365 68.6135 18.1435 68.288 18.0505L66.2576 17.6011C65.0952 17.3376 64.2737 16.9501 63.7777 16.4851C63.2818 16.0201 63.0493 15.3847 63.0493 14.6097C63.0493 13.9587 63.2663 13.3853 63.6847 12.9048C64.1187 12.4243 64.7232 12.0523 65.5137 11.7888C66.3041 11.5254 67.2186 11.3859 68.288 11.3859C69.2335 11.3859 70.1014 11.4789 70.8919 11.6959C71.6823 11.8973 72.3333 12.1608 72.8448 12.4708V15.1212C72.3178 14.8112 71.6979 14.5632 71.0159 14.3772C70.3184 14.1912 69.6055 14.0982 68.877 14.0982C67.823 14.0982 67.2961 14.2842 67.2961 14.6407C67.2961 14.8112 67.3736 14.9352 67.5441 15.0282C67.7146 15.1212 68.009 15.1987 68.443 15.2917L70.1324 15.6017C71.2329 15.7876 72.0543 16.1286 72.5968 16.6091C73.1393 17.0896 73.4028 17.787 73.4028 18.7325C73.4028 19.7555 72.9533 20.5769 72.0543 21.1659C71.1554 21.7704 69.8844 22.0648 68.2415 22.0648C67.2806 22.0338 66.3506 21.9098 65.4362 21.6774Z"></path>
        <path d="M77.5891 21.3213C76.6281 20.8408 75.8842 20.2054 75.4037 19.3994C74.9077 18.5934 74.6752 17.679 74.6752 16.656C74.6752 15.6486 74.9232 14.7341 75.4347 13.9437C75.9462 13.1377 76.6901 12.5177 77.6666 12.0528C78.643 11.6033 79.821 11.3708 81.1849 11.3708C82.8743 11.3708 84.2693 11.7273 85.3852 12.4402V15.5246C84.9977 15.2611 84.5328 15.0286 84.0058 14.8736C83.4788 14.7031 82.9208 14.6256 82.3319 14.6256C81.2779 14.6256 80.472 14.8116 79.8675 15.1991C79.2785 15.5866 78.984 16.0826 78.984 16.7025C78.984 17.307 79.263 17.803 79.852 18.1905C80.4254 18.5779 81.2624 18.7794 82.3474 18.7794C82.9053 18.7794 83.4633 18.7019 84.0058 18.5314C84.5483 18.3609 85.0287 18.175 85.4162 17.927V20.9183C84.1762 21.6623 82.7348 22.0343 81.1074 22.0343C79.728 22.0343 78.5655 21.7863 77.5891 21.3213Z"></path>
        <path d="M89.8041 21.3213C88.8276 20.8408 88.0837 20.2054 87.5722 19.3839C87.0607 18.5624 86.7972 17.648 86.7972 16.625C86.7972 15.6176 87.0607 14.7031 87.5722 13.9127C88.0837 13.1222 88.8276 12.5022 89.7886 12.0528C90.7495 11.6033 91.9119 11.3708 93.2464 11.3708C94.5794 11.3708 95.7418 11.5878 96.7028 12.0528C97.6637 12.5022 98.4077 13.1222 98.9192 13.9127C99.4306 14.7031 99.6786 15.6021 99.6786 16.625C99.6786 17.6325 99.4306 18.5624 98.9192 19.3839C98.4077 20.2054 97.6792 20.8563 96.7028 21.3213C95.7263 21.7863 94.5794 22.0343 93.2464 22.0343C91.9274 22.0343 90.7805 21.7863 89.8041 21.3213ZM94.9358 18.3299C95.3388 17.927 95.5558 17.369 95.5558 16.7025C95.5558 16.0206 95.3543 15.4936 94.9358 15.0906C94.5174 14.6876 93.9594 14.4861 93.2619 14.4861C92.5335 14.4861 91.9739 14.6876 91.5555 15.0906C91.1525 15.4936 90.9355 16.0206 90.9355 16.7025C90.9355 17.3845 91.137 17.927 91.5555 18.3299C91.9739 18.7484 92.5335 18.9499 93.2619 18.9499C93.9594 18.9344 94.5329 18.7329 94.9358 18.3299Z"></path>
        <path d="M110.048 11.9901V15.6325C109.614 15.3535 109.056 15.214 108.374 15.214C107.475 15.214 106.777 15.493 106.297 16.0354C105.816 16.5779 105.568 17.4304 105.568 18.5773V21.6772H101.43V11.8196H105.491V14.966C105.708 13.819 106.08 12.9666 106.576 12.4241C107.072 11.8816 107.723 11.5872 108.513 11.5872C109.102 11.5872 109.614 11.7267 110.048 11.9901Z"></path>
        <path d="M124 9.52563V21.6925H119.862V19.4761C119.505 20.3131 118.978 20.9486 118.265 21.3825C117.551 21.8165 116.667 22.0335 115.613 22.0335C114.683 22.0335 113.862 21.801 113.164 21.3515C112.467 20.9021 111.925 20.2666 111.553 19.4761C111.181 18.6702 110.995 17.7712 110.995 16.7793C110.979 15.7408 111.181 14.8109 111.599 13.9894C112.002 13.168 112.591 12.5325 113.335 12.0675C114.079 11.6025 114.931 11.37 115.892 11.37C117.861 11.37 119.18 12.2225 119.862 13.9429V9.52563H124ZM119.242 18.2517C119.66 17.8487 119.877 17.3062 119.877 16.6553C119.877 16.0198 119.676 15.5083 119.257 15.1209C118.839 14.7334 118.281 14.5319 117.582 14.5319C116.884 14.5319 116.326 14.7334 115.908 15.1364C115.489 15.5393 115.288 16.0508 115.288 16.7018C115.288 17.3527 115.489 17.8642 115.908 18.2672C116.326 18.6702 116.869 18.8717 117.566 18.8717C118.265 18.8717 118.823 18.6702 119.242 18.2517Z"></path>
        <path d="M58.9885 12.4091C60.1772 12.4091 61.1429 11.5416 61.1429 10.4717C61.1429 9.40164 60.1772 8.5343 58.9885 8.5343C57.7981 8.5343 56.8341 9.40164 56.8341 10.4717C56.8341 11.5416 57.7981 12.4091 58.9885 12.4091Z"></path>
        <path d="M61.1429 13.741C59.8254 14.3144 58.1825 14.3299 56.8341 13.741V21.6921H61.1429V13.741Z"></path>
      </g>
    </svg>
  );
}

function TinyLetterTitle({ style }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="34"
        width="34"
        version="1.2"
        viewBox="0 0 36 48"
        xmlSpace="preserve"
        style={{ marginRight: 4 }}
      >
        <g>
          <path
            fill="#FFF"
            d="M32.1 9.8H3.9c-1.4 0-2.5 1.1-2.5 2.5v23c0 1.4 1.1 2.5 2.5 2.5H14l9.6 7.3v-7.3h8.5c1.4 0 2.5-1.1 2.5-2.5v-23c0-1.4-1.1-2.5-2.5-2.5z"
          ></path>
          <path
            fill="#ED1C24"
            d="M16.9 2.8l1.1 1 1.1-1.1c2-2 5.2-2 7.2 0s2 5.2 0 7.2L18 16.6 9.8 9.9c-2-2-2-5.2 0-7.2 1.9-1.9 5.1-1.9 7.1.1z"
          ></path>
          <path d="M32.1 8.6h-3.6c.3-.7.5-1.5.5-2.3 0-1.7-.7-3.3-1.9-4.5C25.9.7 24.3 0 22.6 0c-1.7 0-3.3.7-4.5 1.9L18 2l-.2-.2C16.6.7 15 0 13.3 0c-1.7 0-3.3.7-4.5 1.9C7 3.7 6.5 6.4 7.4 8.6H3.9C1.7 8.6 0 10.4 0 12.5v22.6C0 37.2 1.7 39 3.9 39H13l11.9 9v-9h7.3c2.1 0 3.9-1.7 3.9-3.9V12.5c-.1-2.1-1.8-3.9-4-3.9zM10.7 3.7c.7-.7 1.7-1.1 2.7-1.1 1 0 2 .4 2.7 1.1l2 2 2-2c.7-.7 1.7-1.1 2.7-1.1 1 0 2 .4 2.7 1.1s1.1 1.7 1.1 2.7c0 1-.4 1.9-1.1 2.6l-7.4 6-7.4-6c-1.5-1.5-1.5-3.9 0-5.3zm-6.8 7.5h5.5l8.7 7 8.7-7h5.5c.7 0 1.3.6 1.3 1.3v3.9L18 28.1 2.6 16.4v-3.9c0-.7.5-1.3 1.3-1.3zm29.5 8.4v8.9l-5.8-4.4 5.8-4.5zm-25 4.5l-5.8 4.4v-8.9l5.8 4.5zm23.7 12.3h-9.8v6.4l-8.4-6.4h-10c-.7 0-1.3-.6-1.3-1.3v-3.4l8-6.1 7.4 5.7 7.4-5.7 8 6.1v3.4c0 .7-.6 1.3-1.3 1.3z"></path>
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.2"
        width="124"
        height="34"
        viewBox="0 0 138.1 24"
      >
        <g>
          <path
            fill="currentColor"
            d="M1.3,17h3.1L8.1,2.3h-1C4.8,2.3,4.2,3,1.8,7.5H0l1.8-7h17.1l-1.8,7h-1.6c-0.1-4.4-0.4-5.2-2.8-5.2   h-1L8.1,17h3.1l-0.5,2.1H0.8L1.3,17z M22.2,16.5c0,0.5,0.2,0.7,0.6,0.7c0.5,0,1.2-0.8,2-2.9l1.3,0.4c-1.1,3.4-2.7,4.8-4.5,4.8   c-1.5,0-2.6-1-2.6-2.7c0-2.7,2.4-6.5,2.4-8.3c0-0.5-0.2-0.6-0.4-0.6c-0.8,0-1.5,1.2-2.3,3l-1.4-0.6c1.2-2.8,2.7-4.5,4.7-4.5   c1.5,0,2.5,1.1,2.5,2.9C24.5,10.9,22.2,14.8,22.2,16.5z M40,17.1c0.6,0,1.2-0.9,2-2.9l1.3,0.4c-1.1,3.4-2.7,4.8-4.4,4.8   c-1.5,0-2.5-1-2.5-2.6c0-2.8,1.9-5.7,1.9-7.6c0-0.7-0.3-0.9-0.8-0.9c-1.3,0-3.8,2.2-6,10.9h-3.4l2.4-9.2c0.4-1.6,0.3-2.1-0.2-2.1   c-0.7,0-1.4,1.2-2.2,3l-1.3-0.6c1.2-2.8,2.6-4.5,4.6-4.5c1.2,0,2.1,0.9,2.1,2.6c0,0.8-0.2,1.8-0.6,3.2l0.2,0.1c1.9-4,4-5.9,6-5.9   c1.6,0,2.6,1.3,2.6,3c0,2.4-2.1,6.1-2.1,7.8C39.5,16.9,39.7,17.1,40,17.1z M51,8.2c0,2.6-1.6,5.2-1.6,6.8c0,0.7,0.3,1,0.9,1   c1.5,0,3.5-1.7,5.7-10.1h3.2l-2.6,11c-1.2,5.2-4.1,7.1-7.7,7.1c-2,0-4.4-0.5-4.4-2.6c0-0.9,0.7-2,2-2c1.1,0,1.7,0.8,1.6,1.7   c0,0.5-0.3,1-0.6,1.2c0.3,0.1,0.8,0.2,1.3,0.2c2.2,0,3.7-1.8,4.7-5.7l0.6-2.2l-0.2-0.1c-1.6,3-3.4,4.1-5.1,4.1   c-1.9,0-2.8-1.3-2.8-3c0-2.2,1.8-5.3,1.8-6.9c0-0.4-0.2-0.6-0.4-0.6c-0.7,0-1.4,1.2-2.2,2.8l-1.3-0.6c1.3-2.8,2.8-4.5,4.7-4.5   C50.1,5.8,51,6.7,51,8.2z M72.7,0.4l-0.5,2.1h-3l-3.6,14.5h3.4c2.7,0,3.2-1,5.1-5h1.8L74,19.2H58.6l0.5-2.1H62l3.6-14.5h-2.9   l0.5-2.1H72.7z M80.7,13.8c0,0.2,0,0.5,0,0.7c0,2.4,1.2,3.1,2.6,3.1c1.4,0,2.8-0.9,4-2.6l1.2,0.9c-1.5,2.1-3.2,3.6-6.2,3.6   c-2.9,0-5-2-5-5.2c0-4.4,3.8-8.5,8.2-8.5c2.4,0,3.8,1.2,3.8,3C89.4,11.3,86.7,13.5,80.7,13.8z M81,12.5c4-0.4,5.4-2,5.4-3.7   c0-0.8-0.5-1.4-1.3-1.4C83.1,7.3,81.6,10,81,12.5z M96.7,8.1L95,14.3c-0.2,0.7-0.3,1.4-0.3,1.7c0,0.8,0.4,1,1,1   c1,0,1.9-1.3,2.7-3.1l1.4,0.5c-1.4,4-3.6,5-5.1,5c-1.9,0-3.2-0.9-3.2-2.9c0-0.8,0.3-2,0.5-2.8l1.5-5.7h-2.5l0.5-1.7h2.5L94.8,3   l3.4-0.4l-1,3.8h4l-0.5,1.7H96.7z M107.2,8.1l-1.7,6.2c-0.2,0.7-0.3,1.4-0.3,1.7c0,0.8,0.4,1,1,1c1,0,1.9-1.3,2.7-3.1l1.4,0.5   c-1.4,4-3.6,5-5.1,5c-1.9,0-3.2-0.9-3.2-2.9c0-0.8,0.3-2,0.5-2.8l1.5-5.7h-2.5l0.5-1.7h2.5l0.9-3.4l3.4-0.4l-1,3.8h4l-0.5,1.7   H107.2z M115.2,13.8c0,0.2,0,0.5,0,0.7c0,2.4,1.2,3.1,2.6,3.1c1.4,0,2.8-0.9,4-2.6l1.2,0.9c-1.5,2.1-3.2,3.6-6.2,3.6   c-2.9,0-5-2-5-5.2c0-4.4,3.8-8.5,8.2-8.5c2.4,0,3.8,1.2,3.8,3C123.8,11.3,121.2,13.5,115.2,13.8z M115.4,12.5c4-0.4,5.4-2,5.4-3.7   c0-0.8-0.5-1.4-1.3-1.4C117.6,7.3,116,10,115.4,12.5z M128.4,9.9c0.4-1.6,0.3-2.1-0.2-2.1c-0.7,0-1.4,1.2-2.2,3l-1.3-0.6   c1.2-2.8,2.6-4.5,4.6-4.5c1.2,0,2.1,0.9,2.1,2.6c0,0.8-0.2,1.8-0.6,3.1l0.2,0.1c1.6-3.8,3-5.8,5-5.8c1.2,0,2.1,0.8,2.1,2.2   c0,1.4-0.9,2.6-2,2.6c-1,0-1.8-0.7-1.7-1.8c-0.8,0.3-2.9,2.8-4.9,10.5H126L128.4,9.9z"
          />
          <path
            fill="#ED1C24"
            d="M24.8,0.3c-0.1,0.1-0.3,0.2-0.4,0.3c-0.1-0.1-0.2-0.2-0.3-0.3c-0.4-0.5-1.2-0.5-1.7,0   c-0.5,0.4-0.6,1.2-0.2,1.7c0.6,0.7,1.2,1.4,1.8,2.1c0.8-0.7,1.5-1.4,2.3-2c0.5-0.4,0.6-1.2,0.2-1.7C26.1-0.1,25.4-0.1,24.8,0.3z"
          />
        </g>
      </svg>
    </div>
  );
}