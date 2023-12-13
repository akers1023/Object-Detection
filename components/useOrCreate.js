import { useEffect } from "react";
import { ref, child, get, set } from "firebase/database";
import { db } from "./config";

export function UseOrCreateData(id_date) {
  useEffect(() => {
    const checkAndSetData = async () => {
      const listDateRef = ref(db, "list_date");

      try {
        const snapshot = await get(child(listDateRef, id_date));

        if (snapshot.exists()) {
          // id_date already exists in list_date
          return id_date;
        } else {
          const newIdDateData = {
            fresh: {
              One: {
                typeone: "One",
                valueOne: 0,
              },
              Two: {
                typetwo: "Two",
                valueTwo: 0,
              },
              Three: {
                typethree: "Three",
                valueThree: 0,
              },
            },
            percent: {
              percent: "percent",
              valuePercent: 0,
            },
            rotten: {
              rotten: "rotten",
              valueRotten: 0,
            },
            id: id_date,
          };

          await set(child(listDateRef, id_date), newIdDateData);
          return id_date;
        }
      } catch (error) {
        console.error("Error checking and setting data:", error);
      }
    };

    checkAndSetData();
  }, [id_date]);
}
