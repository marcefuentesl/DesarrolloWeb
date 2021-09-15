import { Badge } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

export default function MyButton(params) {
  return (
    <section>
      <ShoppingCartOutlinedIcon
        value="miValor"
        id="Carrito"
        onClick={(e) => params._handleSelectFromButton(e)}
        style={{ color: "white" }}
        fontSize="large"
      />
      <Badge pill bg="danger">
        {params.nombres.length}
      </Badge>
    </section>
  );
}
