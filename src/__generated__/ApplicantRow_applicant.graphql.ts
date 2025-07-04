/**
 * @generated SignedSource<<27224aabe60cbb5a6a72fe63f0b6785a>>
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
  readonly firstName: string;
  readonly id: string;
  readonly job: {
    readonly title: string;
  };
  readonly lastName: string;
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
      "concreteType": "JobRef",
      "kind": "LinkedField",
      "name": "job",
      "plural": false,
      "selections": [
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
  "type": "ApplicantRow",
  "abstractKey": null
};

(node as any).hash = "5b22eded192a06dff7f4f8013e15f6a3";

export default node;
