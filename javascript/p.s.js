const products = [
    { 
        name: "beesline", 
        description: `
        - مرطب طبيعي يعزز نعومة البشرة ويحميها من الجفاف.  
        - غني بالمكونات الطبيعية التي توفر ترطيبًا عميقًا.  
        - سريع الامتصاص ولا يترك ملمسًا دهنيًا على الجلد.  
        `, 
        specifications: `
        - يحتوي على شمع العسل المغذي.  
        - غني بزيت اللوز وفيتامين E لترطيب وحماية البشرة.  
        - خالٍ من المواد الكيميائية الضارة والبارابين.  
        `, 
        dest: `
        - يستخدم لترطيب البشرة الجافة والمتشققة.  
        - مناسب للبشرة الحساسة، ويقلل من التهيج.  
        - يمكن استخدامه يوميًا للحفاظ على بشرة ناعمة وصحية.  
        `,  
        image: "../image2/beauty-pearlpng.png", 
        price: 3200 
    },

    { 
        name: "glysolid", 
        description: `
        - كريم ترطيب قوي للبشرة الجافة والمتشققة.  
        - يوفر ترطيبًا يدوم لفترة طويلة دون ترك طبقة دهنية.  
        - يعزز مرونة البشرة ويحميها من العوامل البيئية الضارة.  
        `, 
        specifications: `
        - غني بالجلسرين المركز لترطيب مكثف.  
        - يحتوي على زبدة الشيا لزيادة النعومة.  
        - خالٍ من العطور والمواد الحافظة القاسية على البشرة.  
        `, 
        dest: `
        - يستخدم لعلاج تشققات اليدين والقدمين.  
        - فعال في ترطيب البشرة شديدة الجفاف.  
        - يمكن استخدامه يوميًا للحصول على أفضل النتائج.  
        `,  
        image: "../image2/burnus.webp", 
        price: 1800 
    },

    { 
        name: "dove", 
        description: `
        - صابون مرطب يمنح البشرة نعومة وانتعاشًا فوريًا.  
        - ينظف البشرة بلطف دون أن يسبب الجفاف.  
        - مناسب للاستخدام اليومي لكافة أنواع البشرة.  
        `, 
        specifications: `
        - يحتوي على 1/4 كريم مرطب لحماية البشرة من الجفاف.  
        - غني بزيت اللوز ومستخلصات طبيعية مغذية.  
        - خالٍ من الكبريتات والمواد الكيميائية القاسية.  
        `, 
        dest: `
        - يستخدم لتنظيف وترطيب البشرة في آنٍ واحد.  
        - مثالي للأشخاص ذوي البشرة الجافة والحساسة.  
        - مناسب للوجه والجسم، خاصة في الطقس البارد.  
        `,  
        image: "../image2/dove-beauty.webp", 
        price: 100 
    },

    { 
        name: "eva", 
        description: `
        - صابون مقشر يساعد في إزالة خلايا الجلد الميتة.  
        - يعزز نعومة البشرة ويمنحها مظهرًا مشرقًا.  
        - مناسب للاستخدام المنتظم للحفاظ على بشرة صحية.  
        `, 
        specifications: `
        - يحتوي على الجلسرين لترطيب البشرة أثناء التقشير.  
        - غني بحبيبات التقشير الطبيعية لإزالة الشوائب.  
        - يحتوي على زيوت مغذية للحفاظ على ترطيب الجلد.  
        `, 
        dest: `
        - يستخدم لتقشير البشرة وتجديدها.  
        - مناسب للبشرة العادية والدهنية.  
        - يمكن استخدامه مرتين إلى ثلاث مرات أسبوعيًا للحصول على بشرة ناعمة.  
        `,  
        image: "../image2/eva-exfoliating-glycerin.webp", 
        price: 100 
    },

    { 
        name: "AVUVA", 
        description: `
        - كريم مرطب برائحة أزهار الكرز الفواحة.  
        - يمنح البشرة ترطيبًا عميقًا ولمعانًا صحيًا.  
        - يمتصه الجلد بسرعة دون ترك أي بقايا دهنية.  
        `, 
        specifications: `
        - غني بزبدة الشيا لترطيب مكثف.  
        - يحتوي على مستخلص أزهار الكرز لإضفاء رائحة عطرية منعشة.  
        - غني بفيتامين E المضاد للأكسدة لحماية البشرة.  
        `, 
        dest: `
        - يستخدم لترطيب البشرة الجافة والعادية.  
        - مناسب للاستخدام اليومي بعد الاستحمام للحفاظ على نعومة البشرة.  
        - يساعد في تهدئة الجلد بعد التعرض لأشعة الشمس.  
        `,  
        image: "../image2/cherry-blossom.webp", 
        price: 100 
    },

    { 
        name: "favelin", 
        description: `
        - كريم غني يرطب البشرة بعمق ويحافظ على نضارتها.  
        - يحتوي على تركيبة فعالة تحمي البشرة من الجفاف.  
        - يمنح الجلد إحساسًا بالراحة والنعومة طوال اليوم.  
        `, 
        specifications: `
        - يحتوي على مستخلصات طبيعية مغذية.  
        - غني بالجلسرين لترطيب مكثف.  
        - خالٍ من المواد الكيميائية الضارة.  
        `, 
        dest: `
        - يستخدم لعلاج البشرة الجافة والمتشققة.  
        - مناسب لجميع أنواع البشرة، بما في ذلك الحساسة.  
        - يمكن استخدامه يوميًا للحفاظ على رطوبة البشرة.  
        `,  
        image: "../image2/favelin.webp", 
        price: 100 
    },

    { 
        name: "fuchs", 
        description: `
        - خيط أسنان مصممة لتنظيف الأسنان بفعالية ولطافة.  
        - تمنح الفم إحساسًا بالنظافة والانتعاش بعد كل استخدام.  
        - تساعد في إزالة البلاك والحفاظ على صحة اللثة.  
        `, 
        specifications: `
        - تحتوي على خيوط  ناعمة لحماية اللثة الحساسة.  
        - تصميم مريح يسهل الوصول إلى جميع مناطق الفم.  
        - متوفرة بأنواع مختلفة تناسب احتياجات الأسنان المختلفة.  
        `, 
        dest: `
        - تستخدم لتنظيف الأسنان يوميًا مرتين على الأقل.  
        - مناسبة للأشخاص ذوي الأسنان الحساسة.  
        - تساعد في الوقاية من التسوس والتهابات اللثة.  
        `,  
        image: "../image2/fuchs-dental.webp", 
        price: 100 
    },

    { 
        name: "labello", 
        description: `
        - مرطب شفاه يمنح شفتيك ترطيبًا عميقًا ولمعانًا طبيعيًا.  
        - يحمي الشفاه من الجفاف والتشقق خاصة في الطقس البارد.  
        - متوفر بنكهات متعددة ورائحة منعشة.  
        `, 
        specifications: `
        - يحتوي على زبدة الشيا لترطيب مكثف.  
        - غني بزيوت طبيعية تحافظ على نعومة الشفاه.  
        - مزود بمعامل حماية من أشعة الشمس.  
        `, 
        dest: `
        - يستخدم يوميًا لحماية الشفاه من الجفاف.  
        - مناسب لجميع الأعمار وجميع أنواع البشرة.  
        - يمكن استخدامه كأساس قبل وضع أحمر الشفاه.  
        `,  
        image: "../image2/labello.webp", 
        price: 100 
    },

    {
        name: "lux",
        description: `
        - صابون فاخر يمنح البشرة نعومة فائقة ورائحة ساحرة.  
        - غني بمكونات طبيعية تساعد على تغذية البشرة وترطيبها.  
        - يمنحك تجربة استحمام منعشة مع رغوة كريمية غنية.  
        `, 
        specifications: `
        - يحتوي على زيوت طبيعية مغذية مثل زيت اللوز وزبدة الشيا.  
        - غني بالجلسرين الذي يحافظ على ترطيب البشرة لفترة طويلة.  
        - متوفر بروائح مختلفة تناسب جميع الأذواق.  
        - خالٍ من البارابين والمواد الكيميائية القاسية.  
        `, 
        dest: `
        - يستخدم يوميًا أثناء الاستحمام لتنظيف البشرة بعمق.  
        - مناسب لجميع أنواع البشرة، بما في ذلك الحساسة.  
        - يساعد في الحفاظ على نعومة البشرة وحمايتها من الجفاف.  
        - يفضل استخدامه مع لوفة الاستحمام للحصول على رغوة غنية وتنظيف مثالي.  
        `,  
        image: "../image2/lux-magical.webp", 
        price: 100
    },
    { 
        name: "listerine", 
        description: `
        - غسول فم قوي يمنح انتعاشًا يدوم لساعات.  
        - يساعد في القضاء على البكتيريا التي تسبب رائحة الفم الكريهة.  
        - يقلل من تراكم البلاك ويحافظ على صحة اللثة.  
        `, 
        specifications: `
        - يحتوي على زيوت أساسية فعالة مثل الثيمول والأوكاليبتول.  
        - غني بالفلورايد لحماية الأسنان من التسوس.  
        - متوفر بإصدارات خالية من الكحول للأشخاص ذوي الفم الحساس.  
        `, 
        dest: `
        - يستخدم يوميًا بعد تنظيف الأسنان للحفاظ على الفم نظيفًا وصحيًا.  
        - يساعد في علاج التهاب اللثة وتقليل نزيفها.  
        - فعال في القضاء على رائحة الفم الكريهة.  
        `,  
        image: "../image2/listerine.webp", 
        price: 100 
    },

    { 
        name: "mixoil", 
        description: `
        - زيت طبيعي متعدد الاستخدامات للعناية بالبشرة والشعر.  
        - يمنح الترطيب العميق ويغذي الشعر وفروة الرأس.  
        - يضفي لمعانًا صحيًا على البشرة ويمنع الجفاف.  
        `, 
        specifications: `
        - يحتوي على مزيج من الزيوت الطبيعية مثل زيت الأرجان وجوز الهند.  
        - غني بفيتامين E المضاد للأكسدة لحماية البشرة والشعر.  
        - خالٍ من السيليكون والبارابين والمواد الكيميائية الضارة.  
        `, 
        dest: `
        - يستخدم لترطيب البشرة بعد الاستحمام.  
        - يمكن تطبيقه على الشعر لتغذيته وتقليل التقصف.  
        - مثالي لتدليك فروة الرأس وتحفيز نمو الشعر.  
        `,  
        image: "../image2/mixoil.webp", 
        price: 100 
    },
    { 
        name: "nivea-men", 
        description: `
        - مزيل عرق قوي يدوم طويلاً، مصمم خصيصًا للرجال.  
        - يمنح إحساسًا بالانتعاش والحماية من التعرق لمدة تصل إلى 48 ساعة.  
        - يحتوي على تركيبة مضادة للبكتيريا للحفاظ على رائحة منعشة.  
        `, 
        specifications: `
        - غني بالكربون النشط الذي يساعد على امتصاص العرق والروائح.  
        - لا يترك أي آثار بيضاء أو بقع على الملابس.  
        - مناسب لجميع أنواع البشرة، حتى الحساسة.  
        `, 
        dest: `
        - يستخدم يوميًا بعد الاستحمام للحفاظ على الانتعاش والنظافة.  
        - مناسب للرجال الذين يعانون من التعرق المفرط.  
        - يفضل عدم استخدامه على الجلد المتهيج أو المصاب.  
        `,  
        image: "../image2/nivea-men-deep.webp", 
        price: 100
    },

    { 
        name: "nivea-spray", 
        description: `
        - مزيل عرق بخاخ سريع الجفاف يمنح حماية تدوم طوال اليوم.  
        - يترك البشرة جافة ومنتعشة بدون أي شعور باللزوجة.  
        - يساعد في تقليل التعرق ومنع الروائح الكريهة.  
        `, 
        specifications: `
        - يحتوي على تركيبة خالية من الكحول لمنع تهيج البشرة.  
        - يوفر حماية فعالة لمدة تصل إلى 48 ساعة.  
        - مناسب لجميع أنواع البشرة، حتى الحساسة.  
        `, 
        dest: `
        - يستخدم مباشرة على بشرة نظيفة وجافة.  
        - يفضل رجه جيدًا قبل الاستخدام.  
        - لا يستخدم على الجلد المتحسس أو المصاب.  
        `,  
        image: "../image2/nivea-spray.webp", 
        price: 100
    },

    { 
        name: "nivea-men-classic", 
        description: `
        - كريم نيفيا الكلاسيكي الشهير بتركيبته المرطبة العميقة.  
        - يوفر ترطيبًا طويل الأمد ويحمي البشرة من الجفاف.  
        - مناسب للاستخدام على الوجه والجسم واليدين.  
        `, 
        specifications: `
        - غني بزبدة الشيا وفيتامين E لتغذية البشرة.  
        - سريع الامتصاص ولا يترك طبقة دهنية على الجلد.  
        - مناسب للبشرة الجافة والعادية.  
        `, 
        dest: `
        - يستخدم يوميًا لترطيب وحماية البشرة من الجفاف.  
        - يمكن استخدامه بعد الحلاقة لتقليل تهيج الجلد.  
        - مناسب لجميع أفراد العائلة.  
        `,  
        image: "../image2/nivea.webp", 
        price: 100
    },

    { 
        name: "oral", 
        description: `
        - فرشاة أسنان مصممة لتنظيف الأسنان بعمق وإزالة البلاك.  
        - تساعد على الوصول إلى المناطق الصعبة داخل الفم.  
        - تمنح الفم إحساسًا بالانتعاش بعد كل استخدام.  
        `, 
        specifications: `
        - تحتوي على شعيرات ناعمة لحماية اللثة من الالتهابات.  
        - مزودة بمقبض مريح لسهولة التحكم أثناء التنظيف.  
        - مناسبة لجميع الفئات العمرية.  
        `, 
        dest: `
        - تستخدم مرتين يوميًا مع معجون الأسنان المفضل لديك.  
        - ينصح بتغييرها كل 3 أشهر لضمان نظافة مثالية.  
        - تساعد في الوقاية من تسوس الأسنان وأمراض اللثة.  
        `,  
        image: "../image2/oral.webp", 
        price: 100
    },

    { 
        name: "sensodyne-soft", 
        description: `
        - فرشاة أسنان ناعمة مصممة خصيصًا للأسنان الحساسة.  
        - تساعد في تنظيف الأسنان بلطف دون التسبب في تهيج اللثة.  
        - تعمل على تقليل حساسية الأسنان مع الاستخدام المستمر.  
        `, 
        specifications: `
        - تحتوي على شعيرات ناعمة ورفيعة لتنظيف فعال بدون ضغط زائد.  
        - مقبض مريح يساعد على التحكم في الفرشاة بسهولة.  
        - مناسبة للأشخاص الذين يعانون من حساسية الأسنان واللثة.  
        `, 
        dest: `
        - تستخدم مرتين يوميًا مع معجون Sensodyne للحماية من الحساسية.  
        - ينصح بعدم الضغط الشديد أثناء التفريش.  
        - يتم استبدالها كل 3 أشهر للحصول على أفضل نتائج.  
        `,  
        image: "../image2/sensodyne-soft.webp", 
        price: 100
    },

    { 
        name: "sensodyne", 
        description: `
        - معجون أسنان متخصص في تخفيف حساسية الأسنان ومنح حماية تدوم طويلاً.  
        - يساعد في تقوية مينا الأسنان وتقليل التهيج الناجم عن المشروبات الباردة والساخنة.  
        - يمنح الفم إحساسًا بالانتعاش والنظافة.  
        `, 
        specifications: `
        - يحتوي على الفلورايد لحماية الأسنان من التسوس.  
        - تركيبة منخفضة التآكل لحماية المينا من التآكل.  
        - مناسب للاستخدام اليومي.  
        `, 
        dest: `
        - يستخدم مرتين يوميًا للحصول على أفضل نتائج.  
        - يفضل عدم شطف الفم بالماء بعد الاستخدام مباشرة.  
        - يساعد في تخفيف الألم المرتبط بحساسية الأسنان عند الاستمرار في استخدامه.  
        `,  
        image: "../image2/sensodyne.webp", 
        price: 100
    },

    { 
        name: "betadine", 
        description: `
        - مطهر طبي قوي يستخدم لتعقيم الجروح والوقاية من الالتهابات.  
        - يساعد في قتل البكتيريا والفطريات والفيروسات بسرعة.  
        - يستخدم في المستشفيات والمنازل كجزء من الإسعافات الأولية.  
        `, 
        specifications: `
        - يحتوي على اليود النشط الذي يعمل كمضاد قوي للبكتيريا.  
        - متوفر بأشكال مختلفة مثل السائل والمراهم.  
        - مناسب للاستخدام على الجلد والجروح الطفيفة.  
        `, 
        dest: `
        - يستخدم لتنظيف وتعقيم الجروح والخدوش البسيطة.  
        - يمكن استخدامه قبل العمليات الجراحية لتعقيم الجلد.  
        - لا يستخدم على الحروق العميقة أو الجروح الكبيرة دون استشارة الطبيب.  
        `,  
        image: "../image2/eeeee.jpg", 
        price: 100
    },

    { 
        name: "clear", 
        description: `
        - شامبو مقاوم للقشرة يمنح الشعر نظافة وانتعاشًا طويل الأمد.  
        - يحتوي على تركيبة مضادة للقشرة تحمي فروة الرأس من الجفاف.  
        - يمنح الشعر لمعانًا وحيوية بعد كل استخدام.  
        `, 
        specifications: `
        - يحتوي على فيتامين B3 ومستخلصات طبيعية للعناية بالشعر.  
        - يساعد في ترطيب فروة الرأس ومنع الحكة والتهيج.  
        - متوفر بإصدارات مختلفة تناسب جميع أنواع الشعر.  
        `, 
        dest: `
        - يستخدم مرتين إلى ثلاث مرات أسبوعيًا لتنظيف الشعر بعمق.  
        - يتم تدليكه بلطف على فروة الرأس وتركه لبضع دقائق قبل الشطف.  
        - مناسب للرجال والنساء الذين يعانون من قشرة الشعر.  
        `,  
        image: "../image2/claer.jpg", 
        price: 100
    }
];
 
    
    function displayProducts() {
        let container = document.getElementById("products-list");
        container.innerHTML = "";
    
        products.forEach(product => {
            let div = document.createElement("div");
            div.classList.add("product-card");
            div.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price} جنيه</p>
                <button class="details-button" onclick="viewDetails(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                    عرض التفاصيل
                </button>
            `;
            container.appendChild(div);
        });
    }
    
    function viewDetails(product) {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "../html/details.html";
    }
    
    window.onload = displayProducts;
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });



    const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});