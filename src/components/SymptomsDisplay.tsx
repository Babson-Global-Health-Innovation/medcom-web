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

import { CheckIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import { Symptoms } from "../config";
import { centeredColumn, join } from "../style";

interface SymptomDisplayProps {
  symptoms: Symptoms;
  onFinish: (symptoms: Set<string>) => unknown;
}

export function SymptomsDisplay(props: SymptomDisplayProps) {
  const symptoms = Object.entries(props.symptoms);
  const [imageSelector, setImageSelector] = React.useState(0); // assumes symptoms is not empty
  const [patientSymptoms, setPatientSymptoms] = React.useState(
    new Set<string>()
  );

  /** Show next symptom */
  function nextImage() {
    const allImagesHaveBeenShown = imageSelector >= symptoms.length - 1;
    if (allImagesHaveBeenShown) {
      props.onFinish(patientSymptoms);
    } else {
      setImageSelector(imageSelector + 1);
    }
  }

  /** Add symptom to patient's current symptoms */
  function addSymptom(symptom: string) {
    setPatientSymptoms(patientSymptoms.add(symptom));
  }

  // There's definitely a cleaner way to represent images, but I don't have enough information to commit to anything.
  const currentSymptom = () => symptoms[imageSelector];
  const symptomName = ([name] = currentSymptom()) => name;
  const symptomImage = ([_, image] = currentSymptom()) => image;

  /** Common style for icons */
  const iconStyle = "w-5 h-5 md:w-10 md:h-10";

  return (
    // full-width here enables consistent image sizes by forcing image width to container width. Without this, this container's width is dynamic and will change according to content's max width
    <div className={join(centeredColumn, "w-full max-w-3xl px-2 md:px-8")}>
      {/* Image of symptom */}
      <img src={symptomImage()} className="w-full rounded-lg" />
      {/* Action Buttons */}
      <div className="flex flex-row justify-between w-full p-8">
        <CheckIcon
          className={join(iconStyle, "text-green-700")}
          onClick={() => {
            addSymptom(symptomName());
            nextImage();
          }}
        />
        <XIcon
          className={join(iconStyle, "text-red-700")}
          onClick={nextImage}
        />
      </div>
    </div>
  );
}
