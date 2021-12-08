// Copyright 2021 Pujit Mehrotra
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Trims spaces from CSS classes
 * @param selector
 * @returns
 */
const trimSelector = (selector: string) => selector.trim();

/**
 * Takes CSS classes and joins them with spaces
 * @param classes
 * @returns resolved class
 */
export const join = (...classes: string[]) =>
  classes.map(trimSelector).join(" ");

/**
 * Tailwind html class expression for centered flexbox column
 */
export const centeredColumn = "flex flex-col items-center justify-center";
