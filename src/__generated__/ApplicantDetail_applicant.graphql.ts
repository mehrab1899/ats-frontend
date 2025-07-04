/**
 * @generated SignedSource<<57b27281c20c39ef305e2b1f5b73fec1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type Stage = "APPLIED" | "HIRED" | "INTERVIEWED" | "REJECTED" | "SHORTLISTED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ApplicantDetail_applicant$data = {
  readonly appliedAt: string;
  readonly coverLetter: string;
  readonly cv: string;
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly job: {
    readonly id: string;
    readonly title: string;
  };
  readonly lastName: string;
  readonly message: string | null | undefined;
  readonly phone: string;
  readonly stage: Stage;
  readonly " $fragmentType": "ApplicantDetail_applicant";
};
export type ApplicantDetail_applicant$key = {
  readonly " $data"?: ApplicantDetail_applicant$data;
  readonly " $fragmentSpreads": FragmentRefs<"ApplicantDetail_applicant">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ApplicantDetail_applicant",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "stage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "appliedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cv",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "coverLetter",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "JobRef",
      "kind": "LinkedField",
      "name": "job",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Applicant",
  "abstractKey": null
};
})();

(node as any).hash = "74a0f4331978186813a85372e4d23114";

export default node;
