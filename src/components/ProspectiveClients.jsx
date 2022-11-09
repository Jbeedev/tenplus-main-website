import React from "react";
import { SiAsana, SiGmail, SiSlack, SiTiktok } from "react-icons/si";
import Button from "./Button";
import ClientSlider from "./ClientSlider";

const ProspectiveClients = () => {
  return (
    <div>
      <div className="w-[100vw] pt-[164px] pb-[116px] bg-[#01303F]">
        <div className="ml-[50px] md:mx-[21px] md:block flex gap-[113px]">
          <div className="bg-white rounded-[10px] pr-[58px] md:pr-[33px] pl-[57px] md:pl-[33px]">
            <h1 className="text-[32px] pt-8 pb-[37px]">
              Have a project in mind?
            </h1>
            <div className="mb-[39px]">
              <input
                className="mb-[30px] w-[100%] md:w-[100%] h-[56px] rounded-[5px] pl-7"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                type="text"
                placeholder="Your Name"
              />
              <input
                className="mb-[30px] w-[100%] md:w-[100%] h-[56px] rounded-[5px] pl-7"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                type="text"
                placeholder="Your Email"
              />
              <select
                className="mb-[30px]  w-[100%] md:w-[100%] bg-white h-[56px] rounded-[5px] pl-7"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                name="pets"
                id="pet-select"
              >
                <option className="bg-[#01303F] text-white" value="">
                  Select Services
                </option>
                <option className="bg-[#01303F] text-white" value="web">
                  Web Development
                </option>
                <option className="bg-[#01303F] text-white" value="mobileApp">
                  Mobile App Development
                </option>
                <option className="bg-[#01303F] text-white" value="graphics">
                  Graphics Design
                </option>
                <option className="bg-[#01303F] text-white" value="ai">
                  Artificial Intelligence
                </option>
                <option className="bg-[#01303F] text-white" value="digMkt">
                  Digital Marketing{" "}
                </option>
                <option className="bg-[#01303F] text-white" value="projjectMgt">
                  Project Management
                </option>
                <option
                  className="bg-[#01303F] text-white"
                  value="printingService"
                >
                  Printing Services
                </option>
                <option
                  className="bg-[#01303F] text-white"
                  value="videoEditing"
                >
                  Video Editing
                </option>
                <option
                  className="bg-[#01303F] text-white"
                  value="cuberSecurity"
                >
                  {" "}
                  Cybersecurity
                </option>
                <option className="bg-[#01303F] text-white" value="blockChain">
                  Blockchain
                </option>
                <option
                  className="bg-[#01303F] text-white"
                  value="computerAcessories"
                >
                  Computers and Accessories
                </option>
                <option className="bg-[#01303F] text-white" value="itTraining">
                  IT Training
                </option>
              </select>
              <textarea
                className="w-[100%] md:w-[100%] rounded-[5px]"
                rows="4"
                cols="50"
                style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }}
                type="text"
              />
            </div>
            <div className="mb-[35px] md:pb-[46px]">
              <Button text="Submit" bgColor="#29ABE2" color="#ffffff" />
            </div>
          </div>
          <div className="w-[55%] md:w-[100%] mt-10 pr-2">
            <h3 className="text-[#29ABE2] text-base mb-[11px]">
              OUR HAPPY CLIENTS
            </h3>
            <h1 className="text-[32px] md:text-[20px] text-white mb-[50px]">
              What Clients Say About Us
            </h1>
            <ClientSlider />
            <h1 className="font-normal mt-[82px] md:text-[10px] md:tracking-widest text-base text-[#29ABE2]">
              OUR TRUSTED CLIENTS
            </h1>
            <div className="flex gap-7 items-center mt-[25px]">
              <p className="flex items-center gap-1 text-white font-medium text-xl">
                <svg
                  width="100"
                  height="31"
                  viewBox="0 0 153 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_308_849)">
                    <path
                      d="M149.143 23.4121L149.144 23.4146C149.236 24.4874 150.08 25.8526 151.541 25.8526H152.397C152.728 25.8526 153 25.5761 153 25.2387V6.1108H152.996C152.988 5.95452 152.921 5.80736 152.81 5.69944C152.698 5.59152 152.55 5.53101 152.397 5.53031H149.747C149.593 5.53108 149.445 5.5916 149.333 5.6995C149.222 5.8074 149.155 5.95452 149.147 6.1108H149.144V7.66505C147.52 5.62969 144.96 4.78479 142.393 4.78479C136.558 4.78479 131.829 9.5989 131.829 15.5381C131.829 21.4774 136.558 26.2918 142.393 26.2918V26.2924C144.96 26.2924 147.757 25.2788 149.143 23.4124V23.4121ZM142.403 22.5277C138.693 22.5277 135.684 19.3986 135.684 15.5375C135.684 11.6777 138.693 8.54794 142.403 8.54794C146.114 8.54794 149.122 11.6777 149.122 15.5378C149.122 19.36 146.174 22.4654 142.515 22.5271L142.403 22.528V22.5277ZM128.478 24.0726L128.477 14.1744H128.477C128.477 8.59475 125.019 4.83068 119.504 4.83068C116.872 4.83068 114.714 6.38007 113.952 7.71094L113.939 7.63496L113.925 7.55838C113.922 7.5457 113.92 7.53304 113.917 7.52039L113.901 7.4441L113.883 7.36812L113.863 7.29214L113.842 7.21677C113.827 7.16653 113.811 7.11667 113.794 7.06724L113.767 6.99339C113.474 6.22203 112.854 5.5765 111.561 5.5765H110.703C110.371 5.5765 110.1 5.85307 110.1 6.19042V25.3205H110.103C110.112 25.4767 110.178 25.6239 110.29 25.7318C110.401 25.8397 110.549 25.9002 110.703 25.901H113.353C113.394 25.901 113.433 25.8958 113.472 25.8882L113.489 25.8836L113.523 25.8727L113.562 25.8611C113.569 25.8591 113.575 25.8568 113.582 25.8542L113.605 25.8432L113.681 25.7997C113.698 25.7881 113.715 25.7753 113.731 25.7615L113.755 25.7402C113.759 25.7362 113.763 25.7338 113.767 25.7302C113.878 25.6228 113.944 25.4761 113.952 25.3205H113.956V14.0207C113.956 11.024 116.343 8.59475 119.287 8.59475C122.231 8.59475 124.618 11.0243 124.618 14.021L124.621 23.4659L124.621 23.4626L124.623 23.4884V25.3205H124.626C124.635 25.4767 124.701 25.6239 124.813 25.7318C124.924 25.8397 125.072 25.9002 125.226 25.901H127.876C127.917 25.901 127.956 25.8958 127.995 25.8882C128.01 25.8851 128.025 25.8791 128.04 25.8745L128.084 25.8617L128.105 25.8542C128.127 25.845 128.146 25.8323 128.167 25.8207C128.179 25.8134 128.192 25.808 128.205 25.7997C128.229 25.7836 128.251 25.7639 128.273 25.7441L128.291 25.7295C128.307 25.7131 128.323 25.6961 128.337 25.6779L128.363 25.6444C128.422 25.5611 128.46 25.4639 128.472 25.3618L128.476 25.3205H128.479V24.0729L128.478 24.0726ZM100.88 23.4121V23.4146C100.973 24.4874 101.817 25.8526 103.279 25.8526H104.134C104.465 25.8526 104.736 25.5761 104.736 25.2387V6.1108H104.733C104.725 5.95452 104.658 5.80736 104.547 5.69944C104.435 5.59152 104.288 5.53101 104.134 5.53031H101.484C101.33 5.53101 101.182 5.59149 101.07 5.6994C100.959 5.8073 100.892 5.95447 100.884 6.1108H100.881V7.66505C99.2569 5.62969 96.6971 4.78479 94.1302 4.78479C88.2956 4.78479 83.5657 9.5989 83.5657 15.5381C83.5657 21.4774 88.2956 26.2918 94.1302 26.2918V26.2924C96.6971 26.2924 99.4948 25.2788 100.88 23.4124V23.4121ZM94.1404 22.5277C90.4298 22.5277 87.4215 19.3986 87.4215 15.5375C87.4215 11.6777 90.4298 8.54794 94.1404 8.54794C97.8515 8.54794 100.859 11.6777 100.859 15.5378C100.859 19.36 97.9113 22.4654 94.2515 22.5271L94.1404 22.528V22.5277ZM67.8946 20.675C69.6636 21.9223 71.5947 22.528 73.4501 22.528C73.8147 22.528 74.1816 22.4885 74.5348 22.4113L74.6403 22.387C74.6926 22.3742 74.7449 22.3609 74.7966 22.3463L74.8994 22.3165C74.9338 22.3062 74.9675 22.2955 75.0013 22.2846L75.1017 22.2502C75.3348 22.1679 75.5559 22.0676 75.7606 21.95L75.8473 21.8986C76.56 21.4622 77.0456 20.8087 77.0456 19.9717C77.0456 18.8445 75.9686 18.2123 74.5832 17.7434L74.4219 17.6902C74.395 17.6811 74.3678 17.6726 74.3403 17.6638L74.1756 17.6124L74.0086 17.5623L73.8401 17.513L73.584 17.4407L73.3255 17.3705L72.9782 17.2787L72.1101 17.0538L71.7686 16.9632L71.5164 16.8942L71.3505 16.8474L71.1874 16.8L71.1067 16.776L70.9468 16.7274C70.9206 16.7194 70.8944 16.7112 70.8682 16.7031L70.7128 16.6526C70.662 16.6356 70.6112 16.6186 70.561 16.6013C68.0586 15.736 65.9032 13.9465 65.9032 11.0492C65.9032 6.61531 69.7847 4.78418 73.4071 4.78418C75.7024 4.78418 78.0709 5.55462 79.6062 6.65816C79.8964 6.88215 79.9302 7.12407 79.9018 7.297L79.8949 7.33287L79.8862 7.3663L79.8767 7.3976L79.8665 7.42617L79.8561 7.4517L79.8411 7.48422L79.828 7.50914L79.813 7.53406L78.3473 9.66455C78.3383 9.67792 78.3285 9.6913 78.3186 9.70406L78.2878 9.74296C78.1223 9.93869 77.8653 10.0742 77.515 9.87274L77.4642 9.84174L77.2087 9.67762L77.117 9.62079L77.0163 9.56L76.9443 9.51745L76.8681 9.47399C76.8549 9.46646 76.8416 9.45896 76.8283 9.4515L76.7462 9.40622L76.6601 9.36063L76.5704 9.31383L76.4763 9.26702L76.3786 9.21991L76.277 9.17281C76.2421 9.15692 76.207 9.14132 76.1718 9.126L76.0627 9.0795L75.9501 9.03392C75.1396 8.7121 74.2771 8.54718 73.4071 8.54764C71.1969 8.54764 69.8656 9.58705 69.8656 10.8745C69.8656 11.606 70.2538 12.0999 70.8781 12.4731L70.9626 12.5223C71.0914 12.595 71.2295 12.6627 71.3756 12.7272L71.4742 12.7694L71.5244 12.7901L71.626 12.8308L71.678 12.8509L71.7832 12.8904L71.8902 12.929L71.9993 12.9667L72.0546 12.9852L72.1666 13.0217L72.3375 13.0758L72.5124 13.1283L72.6905 13.18L72.8109 13.2141L72.9328 13.2478L73.1802 13.3146L73.6225 13.4307L74.0477 13.5481L74.3675 13.638L74.5811 13.6994L74.6878 13.7304L74.9009 13.7933L75.0073 13.8252L75.2197 13.8903L75.4313 13.9571C78.3536 14.8896 81.0077 16.3137 81.0077 19.9717C81.0077 23.8784 77.4176 26.2924 73.4504 26.2924C70.4433 26.2924 67.8835 25.4201 65.7364 23.8164C65.4663 23.541 65.4735 23.2778 65.5213 23.1125L65.5317 23.0796L65.5428 23.0499L65.5541 23.0231L65.5655 22.9997L65.5804 22.9711L65.6017 22.9377L67.0599 20.8179C67.3101 20.4842 67.6149 20.5294 67.8025 20.6209L67.8363 20.6385L67.8671 20.6568L67.8946 20.675ZM57.7072 23.4121V23.4146C57.7999 24.4874 58.6437 25.8526 60.1053 25.8526H60.9609C61.2926 25.8526 61.5642 25.5761 61.5642 25.2387V6.1108H61.5603C61.5521 5.95452 61.4854 5.80736 61.374 5.69944C61.2625 5.59152 61.1147 5.53101 60.9609 5.53031H58.3109C58.1569 5.53101 58.0091 5.59149 57.8975 5.6994C57.786 5.8073 57.7192 5.95447 57.7108 6.1108H57.7078V7.66505C56.0843 5.62969 53.5242 4.78479 50.9573 4.78479C45.123 4.78479 40.3928 9.5989 40.3928 15.5381C40.3928 21.4774 45.123 26.2918 50.9576 26.2918V26.2924C53.5245 26.2924 56.3216 25.2788 57.7075 23.4124L57.7072 23.4121ZM50.9675 22.5277C47.2566 22.5277 44.2483 19.3986 44.2483 15.5375C44.2483 11.6777 47.2566 8.54794 50.9675 8.54794C54.6783 8.54794 57.6863 11.6777 57.6863 15.5378C57.6863 19.36 54.7381 22.4654 51.0786 22.5271L50.9675 22.528V22.5277Z"
                      fill="white"
                    />
                    <path
                      d="M25.5812 16.2695C21.6546 16.2695 18.4715 19.5069 18.4715 23.5004C18.4715 27.494 21.6546 30.7313 25.5812 30.7313C29.5078 30.7313 32.6906 27.494 32.6906 23.5004C32.6906 19.5069 29.5078 16.2695 25.5812 16.2695ZM7.10972 16.2701C3.18312 16.2701 0 19.5069 0 23.5004C0 27.494 3.18312 30.7313 7.10972 30.7313C11.0363 30.7313 14.2197 27.494 14.2197 23.5004C14.2197 19.5069 11.0363 16.2701 7.10972 16.2701ZM23.455 7.23029C23.455 11.2241 20.2719 14.4618 16.3453 14.4618C12.4187 14.4618 9.23588 11.2241 9.23588 7.23029C9.23588 3.23768 12.4187 0 16.3453 0C20.2719 0 23.455 3.23768 23.455 7.2306V7.23029Z"
                      fill="#F06A6A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_308_849">
                      <rect width="153" height="31" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
              <p className="flex items-center gap-1 text-black font-medium text-xl">
                <svg
                  width="100"
                  height="31"
                  viewBox="0 0 132 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_308_852)">
                    <path
                      d="M25.2253 14.0016C27.7088 15.7909 30.7512 16.844 34.0371 16.844V10.4706C33.4152 10.4706 32.7949 10.4053 32.1865 10.2756V15.2923C28.9009 15.2923 25.859 14.2393 23.3747 12.4499V25.4564C23.3747 31.9629 18.1421 37.237 11.6876 37.237C9.27933 37.237 7.04074 36.5031 5.1814 35.2444C7.30345 37.4318 10.2634 38.7887 13.5376 38.7887C19.9927 38.7887 25.2255 33.5146 25.2255 27.0081V14.0014L25.2253 14.0016ZM27.5082 7.57183C26.2025 6.13749 25.4004 4.31015 25.2253 2.37105V1.55127H23.4716C23.913 4.08939 25.4186 6.25753 27.5082 7.57183ZM9.26386 30.2514C8.55479 29.3142 8.17153 28.1677 8.17331 26.9889C8.17331 24.0132 10.5666 21.6004 13.5196 21.6004C14.0697 21.6004 14.6168 21.6851 15.1412 21.8528V15.3372C14.5284 15.2525 13.9099 15.2165 13.2914 15.2296V20.3014C12.7667 20.1337 12.2194 20.0485 11.669 20.049C8.71601 20.049 6.32273 22.4615 6.32273 25.4377C6.32273 27.5419 7.51898 29.3637 9.26386 30.2514Z"
                      fill="#FF004F"
                    />
                    <path
                      d="M23.3748 12.4499C25.8591 14.2393 28.9011 15.292 32.1869 15.292V10.2753C30.3864 9.88715 28.7509 8.94207 27.5084 7.57183C25.4188 6.25753 23.9132 4.08913 23.4718 1.55127H18.8657V27.0073C18.8554 29.975 16.4657 32.3779 13.5195 32.3779C11.7831 32.3779 10.2403 31.5436 9.26348 30.2514C7.51912 29.3637 6.32262 27.5419 6.32262 25.4377C6.32262 22.4618 8.71589 20.049 11.6689 20.049C12.2345 20.049 12.78 20.1379 13.2913 20.3014V15.2299C6.95013 15.3619 1.85034 20.5846 1.85034 27.0076C1.85034 30.2139 3.12033 33.1205 5.18154 35.2444C7.10527 36.547 9.37082 37.2408 11.688 37.2368C18.1425 37.2368 23.3751 31.9624 23.3751 25.4562V12.4499H23.3748Z"
                      fill="black"
                    />
                    <path
                      d="M32.1866 10.2752V8.91878C30.5327 8.92133 28.9115 8.45452 27.5083 7.57172C28.7504 8.94242 30.386 9.88767 32.1866 10.2755V10.2752ZM23.4718 1.55168C23.4296 1.30922 23.3973 1.06514 23.3748 0.82004V0H17.0149V25.4563C17.0045 28.4235 14.6156 30.8264 11.6689 30.8264C10.8335 30.8277 10.0095 30.6309 9.26346 30.2518C10.2406 31.544 11.7831 32.3781 13.5194 32.3781C16.4655 32.3781 18.8554 29.9754 18.8657 27.0078V1.55142H23.4718V1.55168ZM13.2915 15.2303V13.7862C12.7601 13.713 12.2243 13.6763 11.6879 13.6765C5.23282 13.676 0 18.9504 0 25.4563C0 29.535 2.05657 33.1297 5.18177 35.2443C3.12056 33.1206 1.85058 30.2138 1.85058 27.0075C1.85058 20.5847 6.95011 15.3621 13.2915 15.23V15.2303Z"
                      fill="#00F2EA"
                    />
                    <path
                      d="M105.881 31.9034C110.499 31.9034 114.243 28.1581 114.243 23.5381C114.243 18.9184 110.499 15.1724 105.881 15.1724H104.62C109.239 15.1724 112.983 18.9184 112.983 23.5381C112.983 28.1581 109.239 31.9034 104.62 31.9034H105.881H105.881Z"
                      fill="#FF004F"
                    />
                    <path
                      d="M104.507 15.1724H103.247C98.6283 15.1724 94.8833 18.9184 94.8833 23.5381C94.8833 28.1581 98.6283 31.9034 103.247 31.9034H104.507C99.8874 31.9034 96.1432 28.1581 96.1432 23.5381C96.1432 18.9184 99.8874 15.1724 104.507 15.1724Z"
                      fill="#00F2EA"
                    />
                    <path
                      d="M68.765 11.3914V20.9014L73.5755 16.0888H79.4176L73.3461 22.048L80.1051 31.903H74.9507L70.2544 25.1415L68.765 26.5177V31.7886H63.9534V11.3914H68.765ZM120.659 11.3914V20.9014L125.47 16.0888H131.312L125.241 22.048L132 31.9036H126.845L122.147 25.142L120.659 26.5182V31.7892H115.846V11.3914H120.659ZM104.62 15.1723C109.239 15.1723 112.983 18.9184 112.983 23.5381C112.983 28.158 109.239 31.9033 104.62 31.9033H104.506C99.8873 31.9033 96.1431 28.158 96.1431 23.5381C96.1431 18.9184 99.8873 15.1723 104.506 15.1723H104.62ZM56.1644 11.3914L54.7895 15.7461H50.7805V31.7889H45.8535V15.6317H40.9285V11.3911H56.1642L56.1644 11.3914ZM96.4876 11.3914L95.1132 15.7461H91.1042V31.7889H86.1771V15.6317H81.2521V11.3911H96.4876V11.3914ZM61.8909 17.9234V31.7892H57.0812V17.9234H61.8909ZM104.564 19.4706C102.318 19.4706 100.496 21.2909 100.496 23.5381C100.496 25.7852 102.318 27.6063 104.564 27.6068C106.809 27.6068 108.63 25.7852 108.63 23.5381C108.63 21.2909 106.809 19.4706 104.564 19.4706ZM59.485 11.3914C60.8146 11.3914 61.8909 12.4691 61.8909 13.7977C61.8909 15.1263 60.8153 16.204 59.485 16.204C58.1565 16.2035 57.0812 15.1265 57.0812 13.7977C57.0812 12.4691 58.1565 11.3914 59.485 11.3914Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_308_852">
                      <rect width="132" height="39" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
              <p className="text-xl">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 41 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_308_838)">
                    <path
                      d="M9.31821 30.8477V14.9606L4.40542 10.453L0 7.95166V28.044C0 29.5953 1.25322 30.8477 2.79553 30.8477H9.31821Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M31.6819 30.8475H38.2046C39.7515 30.8475 41.0001 29.5905 41.0001 28.0438V7.95166L36.0103 10.8167L31.6819 14.9604V30.8475Z"
                      fill="#34A853"
                    />
                    <path
                      d="M9.31815 14.9603L8.64966 8.75276L9.31815 2.81152L20.4999 11.2223L31.6817 2.81152L32.4295 8.432L31.6817 14.9603L20.4999 23.3711L9.31815 14.9603Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M31.6819 2.81147V14.9603L41.0001 7.95137V4.21322C41.0001 0.746199 37.0538 -1.23025 34.2912 0.848997L31.6819 2.81147Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M0 7.95144L4.28562 11.1751L9.31821 14.9603V2.81155L6.70895 0.849071C3.94145 -1.23034 0 0.746273 0 4.21313V7.95128V7.95144Z"
                      fill="#C5221F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_308_838">
                      <rect width="41" height="31" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
              <p className="text-xl">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_308_844)">
                    <path
                      d="M7.78166 23.316C7.78166 25.4597 6.04917 27.1923 3.90548 27.1923C1.76179 27.1923 0.0292969 25.4597 0.0292969 23.316C0.0292969 21.1724 1.76179 19.4399 3.90563 19.4399H7.78152V23.3161L7.78166 23.316ZM9.71983 23.316C9.71983 21.1724 11.4523 19.4399 13.596 19.4399C15.7397 19.4399 17.4722 21.1724 17.4722 23.3161V33.0065C17.4722 35.1502 15.7397 36.8828 13.5959 36.8828C11.4525 36.8828 9.71983 35.1502 9.71983 33.0065V23.3161V23.316Z"
                      fill="#E01E5A"
                    />
                    <path
                      d="M13.5961 7.75237C11.4524 7.75237 9.71973 6.01987 9.71973 3.87618C9.71973 1.7325 11.4525 0 13.5961 0C15.7396 0 17.4722 1.7325 17.4722 3.87618V7.75251H13.5959L13.5961 7.75237ZM13.5961 9.71987C15.7397 9.71987 17.4722 11.4524 17.4722 13.5961C17.4722 15.7397 15.7397 17.4722 13.5959 17.4722H3.87633C1.7325 17.4722 0 15.7397 0 13.5959C0 11.4525 1.7325 9.71987 3.87618 9.71987H13.5959H13.5961Z"
                      fill="#36C5F0"
                    />
                    <path
                      d="M29.1302 13.5961C29.1302 11.4524 30.8627 9.71973 33.0063 9.71973C35.15 9.71973 36.8826 11.4524 36.8826 13.5961C36.8826 15.7397 35.15 17.4722 33.0063 17.4722H29.1302V13.5959V13.5961ZM27.1921 13.5961C27.1921 15.7397 25.4594 17.4722 23.3157 17.4722C21.1722 17.4722 19.4397 15.7397 19.4397 13.5959V3.87633C19.4397 1.7325 21.1722 0 23.3157 0C25.4593 0 27.1919 1.7325 27.1919 3.87618V13.5959L27.1921 13.5961Z"
                      fill="#2EB67D"
                    />
                    <path
                      d="M23.3157 29.1305C25.4594 29.1305 27.1921 30.863 27.1921 33.0065C27.1921 35.1502 25.4594 36.8828 23.3157 36.8828C21.1722 36.8828 19.4397 35.1502 19.4397 33.0065V29.1305H23.3159H23.3157ZM23.3157 27.1923C21.1722 27.1923 19.4397 25.4597 19.4397 23.316C19.4397 21.1724 21.1722 19.4399 23.3159 19.4399H33.0356C35.1793 19.4399 36.9119 21.1724 36.9119 23.3161C36.9119 25.4597 35.1793 27.1923 33.0356 27.1923H23.3159H23.3157Z"
                      fill="#ECB22E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_308_844">
                      <rect width="37" height="37" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="font-medium text-base text-center py-[30px] md:py-5 md:px-[39px] md:text-[10px]">
          Visit our portal to see the upcoming FREE training at TenPlus Digital
          labs →{" "}
          <a href="/#" className="text-[#29ABE2]">
            Use Coupon Code: FREE
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProspectiveClients;
