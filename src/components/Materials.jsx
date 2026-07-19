import React from 'react';
import './Materials.css';

const Materials = () => {
  const materialsList = [
    { name: "PP", desc: "Polypropylene", img: "/p1.png" },
    { name: "HDPE", desc: "", img: "/p2.png" },
    { name: "LDPE", desc: "", img: "/p3.png" },
    { name: "LLDPE", desc: "", img: "/p4.png" },
    { name: "ABS", desc: "", img: "/p5.png" },
    { name: "HIPS", desc: "", img: "/p6.png" },
    { name: "Nylon (PA)", desc: "", img: "/p7.png" },
    { name: "PC", desc: "", img: "/p8.png" },
    { name: "PET", desc: "", img: "/p9.png" },
    { name: "PVC", desc: "", img: "/p10.png" },
    { name: "Other", desc: "Engineering Plastics", img: "/p11.png" }
  ];

  return (
    <section id="materials" className="materials">
      <div className="container text-center">
        <span className="section-subtitle">MATERIALS WE PROCESS</span>
        <h2 className="section-title">
          Wide Range of Quality <span>Polymers</span>
        </h2>
        
        <div className="materials-list">
          {materialsList.map((item, index) => (
            <div className="material-item" key={index}>
              <img src={item.img} alt={item.name} className="material-image" />
              <h4>{item.name}</h4>
              {item.desc && <p>{item.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
