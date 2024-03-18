import Admin from "@repo/ui/admin";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
  <>
    <Button appName="web">
        <p>HEllo</p>
    </Button>
    <Admin />
  </>
  );
}
