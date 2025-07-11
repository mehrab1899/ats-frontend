/**
 * @generated SignedSource<<5c7af08653af84bdf2c2567f0d6160c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JobCard_job$data = {
  readonly description: string;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "JobCard_job";
};
export type JobCard_job$key = {
  readonly " $data"?: JobCard_job$data;
  readonly " $fragmentSpreads": FragmentRefs<"JobCard_job">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobCard_job",
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
    }
  ],
  "type": "Job",
  "abstractKey": null
};

(node as any).hash = "e8ea6fa0467472fdb34e6bc7cc9bd643";

export default node;
