import React from "react";
import BasicInfo from "./medium";

const BasicInfoList = () => {
    const peoplesInfo = [

        {name: "somesh",
        age: "24",
        dateOfBirth: "06/24/2002",
        number: "000-000-0000",
        email: "mail@gmail.com",
        address: "123 ave",
        city: "richmond",
        state: "va"},

        {name: "henry",
        age: "24",
        dateOfBirth: "06/24/2002",
        number: "000-000-0000",
        email: "mail@gmail.com",
        address: "123 ave",
        city: "richmond",
        state: "va"},

        {name: "bailey",
        age: "24",
        dateOfBirth: "06/24/2002",
        number: "000-000-0000",
        email: "mail@gmail.com",
        address: "123 ave",
        city: "richmond",
        state: "va"},

        {name: "nguyen",
        age: "24",
        dateOfBirth: "06/24/2002",
        number: "000-000-0000",
        email: "mail@gmail.com",
        address: "123 ave",
        city: "richmond",
        state: "va"},

        {name: "savana",
        age: "24",
        dateOfBirth: "06/24/2002",
        number: "000-000-0000",
        email: "mail@gmail.com",
        address: "123 ave",
        city: "richmond",
        state: "va"},

        {name: "valerie",
        age: "24",
        dateOfBirth: "06/24/2002",
        number: "000-000-0000",
        email: "mail@gmail.com",
        address: "123 ave",
        city: "richmond",
        state: "va"}
    ]; 

    return (
        <div className="peopleList">
            {peoplesInfo.map((info) => (
                <BasicInfo name={info.name} age={info.age} dateOfBirth={info.dateOfBirth} number={info.number} email={info.email} address={info.address} city={info.city} state={info.state} />
            ))}
        </div>
    );

};

export default BasicInfoList;