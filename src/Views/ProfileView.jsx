import { Rows, Input, Center, Button } from "UIKit";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// const NAMES = "names-list";

// const getLocalNames = () => {
//   const names = localStorage.getItem(NAMES);
//   if (names) {
//     return JSON.parse(names);
//   }
//   return [];
// };

export const ProfileView = () => {
  const [value, setValue] = useState("");
  const [listNames, setListName] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem(NAMES, JSON.stringify(listNames));
  // }, [listNames]);

  const handleSave = () => {
    if (!value) {
      return;
    }

    const newList = [
      ...listNames,
      {
        id: uuidv4(),
        name: value,
      },
    ];
    setListName(newList);
    console.log(newList);
    setValue("");
  };

  return (
    <div>
      <Center>
        <Rows>
          <h1 className="profile">Profile</h1>
          <h3 className="profile">User Name</h3>
          <Input
            value={value}
            onChange={setValue}
            placeholder="Write your name..."
          />
          <Button onClick={handleSave}>Save</Button>
        </Rows>
      </Center>
    </div>
  );
};

// export { getLocalNames };
