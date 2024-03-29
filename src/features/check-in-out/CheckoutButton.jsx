/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disables={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
