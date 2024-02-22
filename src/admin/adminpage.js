import React from "react";
import "./adminpage.css";
import casuali from "./adminimg/casual.avif";
import westimg from "./adminimg/westenwear.jpg";
import teesimg from "./adminimg/download.jpg";
import poloimg from "./adminimg/polo-tshirt.avif";
import shortimg from "./adminimg/boxer.jpg";
import pantimg from "./adminimg/pantes.png";
import shoesimg from './iadminimg/shoes.png';
import hoodiesimg from "./adminimg/hoodies.jpg";
import accessoriesimg from "./adminimg/accessories.jpg";

export default function Adminpage() {
    const adminop = [
        {
            id: 1,
            name: "Casula-Shirt",
            image: casuali
        },
        {
            id: 2,
            name: "Westernwear",
            image: westimg
        },
        {
            id: 3,
            name: "tees",
            image: teesimg
        },
        {
            id: 4,
            name: "polo-tshirt",
            image: poloimg
        },
        {
            id: 5,
            name: "Hoodie",
            image: hoodiesimg
        },
        {
            id: 6,
            name: "Pant",
            image: pantimg
        },
        {
            id: 7,
            name: "Shorts",
            image: shortimg
        },
        {
            id: 8,
            name: "Shoes",
            image: shoesimg
        },
        {
            id: 9,
            name: "Accessories",
            image: accessoriesimg
        }
    ];
    return (
        <>
            <head>
                <title>
                    Menx
                </title>
            </head>
            <body className="admininter">
                <div className="adminlabelhead">
                    <button type="button" className="adminbb">Profile</button>
                    <label>
                        MenX
                    </label>
                </div>

                <div className="in-contain-admin">
                    {
                        adminop.map((item) => (
                            <div key={item.id} className="body2">
                                <img src={item.image} alt={item.name} />
                                <br />
                                <h3>{item.name}</h3>
                            </div>

                        ))
                    }


                </div>

            </body>
        </>
    );
}
