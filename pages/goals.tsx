import React from "react";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";

const Goals = () => {
  return (
    <>
      <Cursor />

      <main>
        {/* Generate sample article */}
        <article className="article">
          <div className="article__content">
            <h1>Goals</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ullamcorper, diam vitae feugiat tristique, ex urna rutrum enim, id
              efficitur est sapien at nisl. Vivamus eu nisl ac magna consectetur
              eleifend. Ut quis semper nisi. Sed vitae ornare est, non aliquam
              massa. Fusce eleifend, odio a tristique tincidunt, urna tortor
              tincidunt nunc, sit amet gravida ipsum lorem vitae purus. Mauris
              euismod, arcu et lobortis aliquam, nibh nisl faucibus metus, non
              porttitor nisl ante nec odio. Sed metus risus, dictum quis
              tincidunt a, lacinia at erat. Ut euismod, enim sed suscipit
              hendrerit, risus nisi porttitor justo, nec porta quam tortor a mi.
              Mauris gravida aliquam sem, vel placerat nunc. Nunc ac scelerisque
              odio. Ut suscipit, sapien ac dapibus commodo, elit lorem aliquam
              elit, sed posuere nibh nibh quis dolor. Curabitur sit amet cursus
              enim. Proin eget ultrices libero. Sed ut lacus euismod, hendrerit
              sapien non, malesuada tellus.
            </p>
            <p>
              Donec ut libero sit amet ligula iaculis aliquam. Donec at lectus
              imperdiet, dapibus nunc eu, ultricies sapien. Donec dui nulla,
              consequat eu ipsum id, ultricies scelerisque turpis. Donec
              scelerisque, sapien sed viverra luctus, justo enim varius enim,
              nec imperdiet tortor ante non ante. Sed non risus vitae mi egestas
              vehicula. Nulla facilisi. Fusce sed viverra erat, ac fringilla
              nisl. Nulla facilisi. Nullam nec erat in nibh pulvinar aliquam ac
              ac ante. Aenean at ligula eget nisl ultricies ultricies. Nulla
              facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            </p>
          </div>
        </article>
      </main>
    </>
  );
};

export default Goals;
