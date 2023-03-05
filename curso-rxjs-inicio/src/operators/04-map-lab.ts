import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement("div");
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse ac hendrerit ipsum. Donec condimentum posuere tellus, non mollis eros laoreet convallis. Nulla euismod venenatis nibh, eget lobortis enim tristique id. Aenean egestas ligula in euismod mattis. Integer vestibulum commodo ipsum, vitae placerat orci imperdiet eu. Morbi vel fermentum ante. Pellentesque convallis euismod faucibus. Cras in sapien at augue lacinia pretium vel eu risus. Suspendisse nunc ipsum, accumsan eu luctus a, elementum non urna.
<br/><br/>
Donec in felis dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi gravida, risus et efficitur suscipit, turpis odio ultrices magna, ac dignissim ante turpis faucibus diam. Praesent malesuada euismod mi quis tincidunt. Donec eu nunc quis massa gravida luctus. Duis sem quam, venenatis sed sapien et, tristique dignissim erat. Sed nec velit eget ligula vulputate efficitur. Nulla dignissim augue vel imperdiet consectetur. Duis in consectetur turpis. Duis eu cursus sem. Aenean faucibus nunc lectus, id posuere lectus mollis a. Maecenas vel tellus a sem eleifend faucibus et vitae mauris.
<br/><br/>
Nullam hendrerit mollis vestibulum. Mauris sed turpis tincidunt, egestas elit ut, rhoncus diam. Suspendisse mattis justo id ante luctus gravida. Integer id dui a nisl suscipit placerat id et eros. Cras rhoncus, augue a condimentum pulvinar, felis dolor tincidunt mauris, in aliquet ipsum purus sit amet est. Vivamus vel velit nisl. Pellentesque ut tempor ipsum. Maecenas sit amet odio pharetra metus fringilla dapibus nec et felis. Proin non enim id lectus rhoncus egestas. Pellentesque luctus nisl vitae fermentum molestie.
<br/><br/>
Quisque aliquet est quis ex sagittis molestie a et nisl. Suspendisse potenti. Cras at risus id elit finibus iaculis. Suspendisse tincidunt enim quis gravida fringilla. In nec metus eget turpis commodo volutpat vitae a velit. Nullam neque erat, pretium non luctus nec, accumsan eu sem. Mauris eget condimentum nulla. Cras eget pretium ipsum. Proin posuere euismod quam, luctus scelerisque sem scelerisque vel. Donec tincidunt facilisis augue at commodo. Morbi molestie lacinia dictum. Nunc sagittis, velit et egestas eleifend, justo eros congue diam, non pulvinar metus nunc eget libero. Suspendisse malesuada metus lectus, nec commodo massa molestie sit amet.
<br/><br/>
Morbi consequat metus at elit volutpat iaculis. Pellentesque scelerisque, mauris at finibus aliquet, libero risus aliquet quam, in gravida mi augue eu nunc. Morbi egestas non mauris vitae dictum. Nulla ullamcorper rhoncus nulla sit amet placerat. Pellentesque pretium enim vitae egestas fringilla. Suspendisse sagittis lectus ut enim finibus, at ultrices leo posuere. Quisque a sapien purus. Aliquam et molestie orci. Vestibulum aliquam, tortor facilisis porttitor ullamcorper, metus nulla egestas nibh, ac ultricies tortor ipsum et lectus. Nunc malesuada eu mi at ultricies. Nulla consequat, purus quis sagittis cursus, nisl sapien euismod sem, sed varius tortor velit eget sapien. Phasellus eleifend magna ac vulputate dignissim. Ut at mattis nunc. Maecenas hendrerit elit quis ornare posuere.
`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

//Function that does the calculation
const calculatePercentageScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return Math.trunc((scrollTop / (scrollHeight - clientHeight)) * 100);
};

//Streams
const scroll$ = fromEvent(document, "scroll");

const progress$ = scroll$.pipe(
  map((event) => calculatePercentageScroll(event)),
  tap(value => console.log(`SCROLL PERCENTAGE: ${value}%`))
);

progress$.subscribe((percentage) => {
  progressBar.style.width = `${percentage}%`;
});
