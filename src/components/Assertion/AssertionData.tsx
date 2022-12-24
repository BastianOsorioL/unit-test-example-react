import { IAssertion } from '../../interface/assertion';

export const AssertionData = (props: { data: IAssertion }) => {
  const { id, emailRecipient, issuedOn, lastNameRecipient, nameRecipient } =
    props.data;
  return (
    <div>
      <p>ID: {id}</p>
      <p>
        Name: {nameRecipient} {lastNameRecipient}
      </p>
      <p>Email: {emailRecipient}</p>
      <p>Issued On: {issuedOn}</p>
    </div>
  );
};
