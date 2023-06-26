import { useEffect } from "react";

const leadingZero = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

export const transformDate = (str: string) => {
  const inputDate = new Date(str);
  const day = inputDate.getDate();
  const month = inputDate.getMonth() + 1;
  const year = inputDate.getFullYear();
  const outputDateString = `${leadingZero(day)}.${leadingZero(
    month
  )}.${leadingZero(year)}`;
  return outputDateString;
};

export const transformDateTime = (str: string) => {
  let dateStr = "2019-04-25T11:14:15.000Z";
  let date = new Date(dateStr);
  let formattedDate = `${leadingZero(date.getUTCDate())}.${leadingZero(
    date.getUTCMonth() + 1
  )}.${date.getUTCFullYear()} в ${leadingZero(
    date.getUTCHours()
  )}.${leadingZero(date.getUTCMinutes())}`;
  return formattedDate;
};

export const useClickOutside = (
  ref: React.RefObject<HTMLElement> | Array<React.RefObject<HTMLElement>>,
  cb: (e: MouseEvent | TouchEvent) => void
): void => {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const checkClickedElement = (el: React.RefObject<HTMLElement>) =>
        !el.current || el.current.contains(event.target as Element);

      if (
        (Array.isArray(ref) && ref.find(checkClickedElement)) ||
        (!Array.isArray(ref) && checkClickedElement(ref))
      ) {
        return;
      }

      cb(event);
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [ref, cb]);
};
