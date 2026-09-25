/* =========================================================
   كل محتوى الموقع هنا. عدّلي النصوص من هذا الجزء فقط.
   ملاحظة: اكتبي C++ داخل <span dir="ltr">C++</span> في النصوص العربية
   حتى لا تنعكس علامة ++ .
   ========================================================= */
const site = {
  name: "سلمى الغريبي",
  role: "طالبة هندسة حاسب",
  intro:
    "أدرس هندسة الحاسب في جامعة الطائف، وأتعلم البرمجة بالتجربة والتطبيق. أهتم بتطوير البرمجيات والذكاء الاصطناعي، وأحب أن أترك أثرًا واضحًا فيما أشارك فيه.",
  about:
    'طالبة في السنة الثالثة بهندسة الحاسب، كلية الحاسبات وتقنية المعلومات، جامعة الطائف. أتعلم من خلال التجربة والتطبيق، وأدرس لغة <span dir="ltr">C++</span> منذ مستويين دراسيين وأستخدمها في معظم واجباتي. أشارك في IEEE Taif University وTCC Taif، وأجمع بين الجانب التقني وصناعة المحتوى والعمل الجماعي.',
  email: "Salma00615@gmail.com",

  // حسابات التواصل: ضعي الرابط في url وتظهر تلقائيًا في الشريط العلوي.
  // وإذا تركتيه فارغًا ما يظهر شيء.
  socials: [
    { name: "X", url: "" },
    { name: "LinkedIn", url: "" },
    { name: "GitHub", url: "" },
  ],

  nav: [
    { id: "about", label: "عني" },
    { id: "works", label: "أعمالي" },
    { id: "activities", label: "مشاركاتي" },
    { id: "skills", label: "مهاراتي" },
  ],

  // أول عنصر هو المشروع المميز (بطاقة كبيرة)
  projects: [
    {
      title: "Pink Memory",
      desc: "لعبة ويب لمطابقة البطاقات، طُوّرت لفعالية «أكتوبر الوردي» ضمن مشروع جامعي بفريق من خمس طالبات.",
      role: {
        intro:
          "قسّمت المهام بين أعضاء الفريق بحسب مهارات كل عضوة، وتولّيت تطوير منطق اللعبة بالكامل، ويشمل:",
        items: [
          "خلط البطاقات عشوائيًا.",
          "فتح البطاقات وقفلها عند الضغط.",
          "المقارنة بين بطاقتين وتحديد التطابق.",
          "منع الضغط أثناء انتظار إغلاق بطاقتين غير متطابقتين.",
          "اكتشاف اكتمال جميع الأزواج.",
        ],
      },
      challenge:
        "منع الضغط على بطاقة ثالثة أثناء انتظار إغلاق البطاقتين، وحُلّ باستخدام متغير «قفل» يتحكم في تسلسل التنفيذ.",
      learned: [
        "التحكم في تسلسل التنفيذ: فهم أن setTimeout لا يوقف الكود، واستخدام متغير قفل لمنع الأخطاء أثناء الانتظار.",
        "التعامل مع العناصر المتداخلة: الوصول للعنصر الصحيح داخل الـDOM باستخدام querySelector.",
        "تشخيص الأخطاء: استخدام Console وNetwork في أدوات المطوّر لتحديد سبب المشكلة.",
        "العمل الجماعي على كود واحد: الاتفاق المسبق على مسؤولية كل عضوة وتحديد أماكن آمنة لإضافة الكود.",
        "ربط الملفات: ربط JavaScript بـHTML وضبط مسارات الملفات.",
      ],
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "فاتورة سوبرماركت",
      desc: 'برنامج فاتورة مبني بأسلوب البرمجة الكائنية. كلاس يحتفظ ببيانات المنتج بشكل خاص ويحسب المجموع وضريبة القيمة المضافة (١٥٪) والسعر النهائي، ثم يعرض فاتورة مرتبة بإجمالي كامل.',
      tags: ["C++", "OOP"],
      code: String.raw`#include <iostream>
#include <string>
using namespace std;

const float TAX_RATE = 0.15;  // VAT 15%
const int MAX_ITEMS = 10;     // maximum number of products

class Product {
private:
    string itemName;
    float price;
    int quantity;

public:
    // input product information
    void inputData() {
        cin.ignore();  // clear the leftover Enter before reading a full line
        cout << "name: ";
        getline(cin, itemName);  // allows names with spaces

        do {
            cout << "price: ";
            cin >> price;
            if (price < 0)
                cout << "Price cannot be negative.\n";
        } while (price < 0);

        do {
            cout << "quantity: ";
            cin >> quantity;
            if (quantity <= 0)
                cout << "Quantity must be at least 1.\n";
        } while (quantity <= 0);
    }

    // calculate Subtotal
    float calculateSubtotal() {
        return price * quantity;
    }

    // calculate Tax
    float calculateTax() {
        return calculateSubtotal() * TAX_RATE;
    }

    // calculate Final Price
    float calculateFinalPrice() {
        return calculateSubtotal() + calculateTax();
    }

    // display product details
    void displayReceipt() {
        cout << "\nItem: " << itemName << endl;
        cout << "Subtotal: " << calculateSubtotal() << " SAR" << endl;
        cout << "Tax (15%): " << calculateTax() << " SAR" << endl;
        cout << "Final Price: " << calculateFinalPrice() << " SAR" << endl;
        cout << "----------------------" << endl;
    }
};

int main() {
    int numProducts;

    // make sure the number of products fits the array
    do {
        cout << "Enter number of products (1-" << MAX_ITEMS << "): ";
        cin >> numProducts;
    } while (numProducts < 1 || numProducts > MAX_ITEMS);

    Product items[MAX_ITEMS];

    // products data
    for (int i = 0; i < numProducts; i++) {
        cout << "\nEnter product " << i + 1 << ":" << endl;
        items[i].inputData();
    }

    cout << "\n===== RECEIPT =====" << endl;

    float grandTotal = 0;
    for (int i = 0; i < numProducts; i++) {
        items[i].displayReceipt();
        grandTotal += items[i].calculateFinalPrice();
    }

    cout << "GRAND TOTAL: " << grandTotal << " SAR" << endl;

    return 0;
}`,
    },
    {
      title: "برنامج تقديرات المواد",
      desc: 'برنامج يستقبل أسماء ٤ مواد ودرجاتها ويحوّل كل درجة إلى تقدير (A إلى D أو راسب)، مع رفض الدرجات غير الصحيحة. يطبّق المصفوفات والحلقات والجمل الشرطية.',
      tags: ["C++", "Arrays", "Loops"],
      code: String.raw`#include <iostream>
#include <string>
using namespace std;

int main()
{
    const int SUBJECTS = 4;
    string name[SUBJECTS];
    int grade[SUBJECTS];

    for (int i = 0; i < SUBJECTS; i++) {
        cout << "\nSubject " << i + 1 << endl;

        cout << "name: ";
        cin >> ws;                // skip the leftover Enter
        getline(cin, name[i]);    // allows names with spaces

        // keep asking until the grade is valid
        do {
            cout << "grade (0-100): ";
            cin >> grade[i];
            if (grade[i] < 0 || grade[i] > 100)
                cout << "invalid\n";
        } while (grade[i] < 0 || grade[i] > 100);

        cout << name[i] << ": ";
        if (grade[i] >= 90)
            cout << "A\n";
        else if (grade[i] >= 80)
            cout << "B\n";
        else if (grade[i] >= 70)
            cout << "C\n";
        else if (grade[i] >= 60)
            cout << "D\n";
        else
            cout << "failed\n";
    }

    return 0;
}`,
    },
    {
      title: "مشروع قيد الإنشاء",
      desc: "أعمل حاليًا على مشروع مبني على فكرتي الخاصة، وسأعرضه هنا فور اكتماله.",
      tags: ["قيد الإنشاء"],
      wide: true,
    },
  ],

  activities: [
    {
      title: "تجربة الهاكاثون",
      text: "شاركت في هاكاثون وخرجت منه بالتالي:",
      items: [
        "حضرت ورشًا عن بناء الفكرة وكيفية إقناع لجنة التحكيم.",
        "تعلمت دروسًا في القيادة: توزيع المهام بالتساوي، ومنح الفريق وقتًا كافيًا، وعدم التقليل من أي مهمة مهما بدت بسيطة، مع أهمية الاحترام والتواصل.",
        "لاحظت أثر التنظيم على التجربة: استقبال ٩٩ فريقًا في يوم واحد مع ورش تعليمية أدى إلى وقت انتظار طويل وقلة في عدد المحكّمين، فقلّ التفاعل مع طول المدة.",
      ],
    },
    {
      title: "لجنة المحتوى التعليمي، IEEE Taif University",
      text: "عضو في نادي الفرع التقني IEEE بجامعة الطائف. ساهمت في إعداد وكتابة محتوى متنوع، شمل:",
      items: [
        "إعداد محتوى ورش العمل المتنوعة.",
        "كتابة الإعلانات والتغطيات الخاصة بالورش والفعاليات.",
        "إعداد محتوى لمنصة مهارات.",
        "صياغة المحتوى التعليمي بما يتناسب مع أهداف كل فعالية.",
      ],
    },
    {
      title: "ورشة مهارات التواصل",
      soon: true,
      text: "أول ورشة أقدمها، وأعمل حاليًا على إعدادها.",
    },
  ],

  skills: [
    { group: "أبني بها", items: ["C++", "JavaScript", "HTML"] },
    { group: "مهارات شخصية", items: ["حل المشكلات", "التواصل", "صناعة المحتوى"] },
    { group: "أستخدمها يوميًا", items: ["الذكاء الاصطناعي"] },
  ],
};

/* =========================================================
   من هنا يبدأ الكود الذي يعرض المحتوى، ما تحتاجين تعدلينه.
   ========================================================= */
const $ = (s) => document.querySelector(s);
const list = (a) => a.map((x) => `<li dir="auto">${x}</li>`).join("");
const chips = (a) => a.map((t) => `<span class="chip" dir="auto">${t}</span>`).join("");

// الشريط العلوي
$("#brand").textContent = site.name;
$("#links").innerHTML = site.nav.map((n) => `<a href="#${n.id}">${n.label}</a>`).join("");
$("#socials").innerHTML = site.socials
  .filter((s) => s.url)
  .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`)
  .join("");

// البداية وعني
$("#role").textContent = site.role;
$("#name").textContent = site.name;
$("#intro").textContent = site.intro;
$("#about-text").innerHTML = site.about;

// الأعمال
const [main, ...rest] = site.projects;
$("#featured").innerHTML = `
  <div>
    <h3 dir="auto">${main.title}</h3>
    <p>${main.desc}</p>
    <h4>دوري</h4>
    <p>${main.role.intro}</p>
    <ul>${list(main.role.items)}</ul>
    <h4>التحدي</h4>
    <p>${main.challenge}</p>
  </div>
  <div>
    <h4>أهم ما تعلمته</h4>
    <ul>${list(main.learned)}</ul>
    <div class="chips">${chips(main.tags)}</div>
  </div>`;
// يحوّل رموز الكود إلى نص آمن حتى لا يفسّرها المتصفح كوسوم
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const codeBlock = (c) =>
  c
    ? `<details class="code"><summary>عرض الكود</summary><pre dir="ltr"><code>${esc(c)}</code></pre></details>`
    : "";

$("#more-works").innerHTML = rest
  .map(
    (p) => `
  <article class="card${p.wide ? " wide" : ""}">
    <h3 dir="auto">${p.title}</h3>
    <p>${p.desc}</p>
    <div class="chips">${chips(p.tags)}</div>
    ${codeBlock(p.code)}
  </article>`
  )
  .join("");

// المشاركات
$("#timeline").innerHTML = site.activities
  .map(
    (a) => `
  <li class="t-item">
    <h3 dir="auto">${a.title}${a.soon ? ' <span class="chip soon">قريبًا</span>' : ""}</h3>
    <p>${a.text}</p>
    ${a.items ? `<ul class="points">${list(a.items)}</ul>` : ""}
  </li>`
  )
  .join("");

// المهارات
$("#skill-groups").innerHTML = site.skills
  .map(
    (g) => `
  <div>
    <h3>${g.group}</h3>
    <div class="chips">${chips(g.items)}</div>
  </div>`
  )
  .join("");

// التواصل والتذييل
$("#mail-btn").innerHTML = `<a class="btn" href="mailto:${site.email}">راسلني عبر البريد</a>`;
$("#mail").textContent = site.email;
$("#footer").textContent = `© ${new Date().getFullYear()} ${site.name}`;