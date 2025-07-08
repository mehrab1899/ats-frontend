/**
 * @generated SignedSource<<1d444eb276e28735493c4d376f208364>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type JobStatus = "CLOSED" | "DRAFT" | "OPEN" | "%future added value";
export type JobType = "CONTRACT" | "FULL_TIME" | "PART_TIME" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type AdminJobRow_job$data = {
  readonly applicants: number;
  readonly createdAt: string;
  readonly description: string;
  readonly id: string;
  readonly status: JobStatus;
  readonly title: string;
  readonly type: JobType;
  readonly " $fragmentType": "AdminJobRow_job";
};
export type AdminJobRow_job$key = {
  readonly " $data"?: AdminJobRow_job$data;
  readonly " $fragmentSpreads": FragmentRefs<"AdminJobRow_job">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AdminJobRow_job",
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "applicants",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "type": "Job",
  "abstractKey": null
};

(node as any).hash = "c03bfded8d2bbdcf2ea86d5125539e31";

export default node;
