import { tw } from "twind";
import { FaCopyright, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class={tw`bg-pallete-secondary-4 text-pallete-primary p-3 lg:flex lg:justify-around `}>
      <div class="flex">
        <div>
          <h1 class="font-semibold text-2xl">Alvaro J Vanegas</h1>
          <h4>Full Stack Development</h4>
          <div class="flex flex-wrap gap-4 text-3xl">
            <a
              target="_blank"
              title="github"
              href="https://github.com/ajvanegasv"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              title="Instagram"
              href="https://www.instagram.com/ajvanegasv/"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              title="twitter"
              href="https://twitter.com/ajvanegasv"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-between my-3 lg:gap-6 xl:gap-9">
        <div class="flex flex-col">
          <h6 class="font-bold">Legal</h6>
          <a href="#" class="hover:underline text-sm">Cookies</a>
        </div>
        <div class="flex flex-col">
          <h6 className="font-bold">Resources</h6>
          <a href="https://iconos8.es/icons" target="_blank" class="text-sm hover:underline">
            iconos8
          </a>
          <a href="https://iconduck.com/" target="_blank" class="text-sm hover:underline">
            iconduck
          </a>
        </div>
      </div>
      <div class="flex justify-center text-sm items-center gap-2 my-3">
        <h4>
          All rights reserved
        </h4>
        <FaCopyright />
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
