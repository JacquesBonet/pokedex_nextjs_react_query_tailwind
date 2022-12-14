import { IType } from "@/types";
import PokemonTypeColor from "@/utils/colors";

export interface ICardFooterProps {
  name: string,
  types: IType[]
}


export const CardFooter = ({name, types}: ICardFooterProps) => (
  <div className="flex w-full flex-1 flex-col items-center justify-evenly ">
    <h3 className="text-2xl font-bold capitalize tracking-wide text-secondary">
      {name}
    </h3>

    <div className="flex w-full flex-row items-center justify-center gap-4">
      {types.map((t: IType, idx: number) => {
        return (
          <div
            key={idx}
            style={{
              backgroundColor: Object.entries(PokemonTypeColor).filter(
                ([key]) => key === t.type.name
              )[0][1].medium,
            }}
            className="rounded-md px-2 py-1"
          >
            <p className="text-xs font-semibold tracking-wide text-primary">
              {t.type.name.toUpperCase()}
            </p>
          </div>
        )
      })}
    </div>
  </div>
)
