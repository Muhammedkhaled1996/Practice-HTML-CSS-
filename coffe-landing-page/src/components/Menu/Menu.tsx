"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import cappuccino from "@/assets/images/Rectangle 7.png";
import chaiLatte from "@/assets/images/Rectangle 9.png";
import macchiato from "@/assets/images/Rectangle 11.png";
import espresso from "@/assets/images/Rectangle 13.png";
import coffee_blast from "@/assets/images/coffee_blast (1).png";

const items = [
  {
    name: "Cappuccino",
    firstComponent: "Coffee 50%",
    secondComponent: "Milk 50%",
    price: "$8.50",
    image: cappuccino,
  },
  {
    name: "Chai Latte",
    firstComponent: "Tea 50%",
    secondComponent: "Milk 50%",
    price: "$5.50",
    image: chaiLatte,
  },
  {
    name: "Macchiato",
    firstComponent: "Coffee 50%",
    secondComponent: "Milk 50%",
    price: "$10.50",
    image: macchiato,
  },
  {
    name: "Espresso",
    firstComponent: "Coffee 100%",
    secondComponent: "",
    price: "$8.50",
    image: espresso,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative bg-sokari font-playfair">
      <div className="container px-6 md:px-16 py-24 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-center text-4xl md:text-[54px] font-bold text-coffee">
            Enjoy a new blend of coffee style{" "}
          </h2>
          <p className="text-secondary md:text-[20px] md:leading-8.5 tracking-wide text-center mt-4">
            Explore all flavours of coffee with us. There is always a new cup
            worth experiencing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative z-30 group bg-amber-200/20 border border-amber-200"
            >
              <Image
                width={200}
                height={200}
                alt={item.name}
                src={item.image}
                className="h-65 w-full object-cover bg-gray-200"
              />

              <div className="p-5 flex flex-col items-center justify-center font-playfair h-35">
                <h3 className="font-bold text-coffee text-lg text-[22px]">
                  {item.name}
                </h3>

                <p className=" text-[16px]">
                  {item.firstComponent}{" "}
                  {item.secondComponent && `| ${item.secondComponent}`}
                </p>
                <p className="text-xl font-bold text-coffee text-[18px]">
                  ${item.price}
                </p>
              </div>
              <button className="cursor-pointer absolute top-full left-1/2 transform -translate-1/2 bg-main-gold py-2 rounded-full group-hover:scale-105 transition z-10 px-3 py-1.5 ">
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
        <Image
          width={200}
          height={200}
          alt="coffee blast"
          src={coffee_blast}
          className=" absolute -bottom-[80px] lg:-bottom-[120px]  -right-0 w-[300px] md:w-[478px] object-cover"
        />
      </div>
    </section>
  );
}
