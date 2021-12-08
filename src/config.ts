/**
 * Maps display name of symptom to its image source
 */
export interface Symptoms {
  [displayName: string]: string;
}

export const symptoms: Symptoms = Object.freeze({
  Pregnancy: "https://pbs.twimg.com/media/EoQXSX-WEAspgv_.jpg",
  Cough:
    "https://media.istockphoto.com/photos/coughing-man-picture-id184386430?k=20&m=184386430&s=612x612&w=0&h=Aen7QIZtbyFMk-JQBF_RJgVahnWeJitJvvPtc2RMrrE=",
  Headache:
    "https://hmh-ea97.kxcdn.com/host_images/when-will-the-ringing-in-my-ear-go-away-GettyImages-643310504.jpg",
  Stomachache:
    "https://img-static.popxo.com/tr:w-600,rt-auto,q-40/app_photos/images/3854/original/Piles-1.jpg",
  "Chest Pain": "https://cdn.ghanaweb.com/imagelib/pics/976/97681294.295.jpg",
  "Neck Pain":
    "https://www.corebalancecentre.ca/uploads/1/3/7/7/137750941/unknown-4_orig.jpeg",
  Nausea:
    "https://www.verywellhealth.com/thmb/gI--Aogxxlxdcnnv-pzfQpPU4fk=/3435x2576/smart/filters:no_upscale()/young-african-american-woman-feeling-nausea-during-breakfast-time-at-dining-room--907546156-5a90427f3037130037020d92.jpg",
  Dizziness:
    "https://www.thehealthy.com/wp-content/uploads/2018/02/14-Vertigo-Treatments-to-Finally-Cure-Your-Dizziness.jpg?resize=1024,683",
});
