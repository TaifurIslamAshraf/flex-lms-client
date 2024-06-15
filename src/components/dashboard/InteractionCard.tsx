import { Card, CardContent, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  info: string | number;
};

const InteractionCard = ({ title, info }: Props) => {
  return (
    <Card className="bg-gradient-to-r from-amber-500 to-amber-200 max-w-[300px] w-full p-3 text-center space-y-3">
      <CardTitle className="text-xl font-siliguri font-semibold text-muted-foreground">
        {title}
      </CardTitle>
      <CardContent className="text-secondary text-5xl font-extrabold">
        {info}
      </CardContent>
    </Card>
  );
};

export default InteractionCard;
