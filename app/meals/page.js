import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/component/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "all meals",
  description: "browse all meals shared by our community",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals , created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipes and cook it yourself</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your favorite recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Loading Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
