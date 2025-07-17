/**
 * @generated SignedSource<<9c040818b405f0ef510fcf71022df8c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type Stage = "APPLIED" | "HIRED" | "INTERVIEWED" | "REJECTED" | "SHORTLISTED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ApplicantRow_applicant$data = {
  readonly appliedAt: string;
  readonly email: string;
  readonly id: string;
  readonly name: string;
  readonly position: string;
  readonly stage: Stage;
  readonly " $fragmentType": "ApplicantRow_applicant";
};
export type ApplicantRow_applicant$key = {
  readonly " $data"?: ApplicantRow_applicant$data;
  readonly " $fragmentSpreads": FragmentRefs<"ApplicantRow_applicant">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ApplicantRow_applicant",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
      "name": "stage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "position",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "appliedAt",
      "storageKey": null
    }
  ],
  "type": "Applicant",
  "abstractKey": null
};

(node as any).hash = "a1309809216dc0cdd2f843be0d1290df";

export default node;
