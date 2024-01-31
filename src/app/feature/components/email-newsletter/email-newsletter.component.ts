import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsletterServiceService } from '../../shared/services/newsletter-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-newsletter',
  templateUrl: './email-newsletter.component.html',
  styleUrls: ['./email-newsletter.component.scss'],
})
export class EmailNewsletterComponent implements OnInit {
  newsletterData: FormGroup;
  data: any = {};
  typeSingle: string | null = '';
  typeFinal: string = '';
  dataAttachments: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private newsletterService: NewsletterServiceService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    this.newsletterData = this.formBuilder.group({
      name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      category: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.typeSingle = this.activeRouter.snapshot.paramMap.get('action');

    if (this.typeSingle == 'edit') {
      this.newsletterService.getNewsletterData.subscribe((data) => {
        console.log('verifricacion: ', data);
        if (data && Object.keys(data).length === 0)
          this.router.navigate(['emails']);

        this.typeFinal = 'Editar';
        this.data = data;
        this.dataAttachments = data.attachments ?? [];

        this.newsletterData.patchValue({
          name: data.name,
          subject: data.subject,
          category: data.category,
          content: data.content,
        });
        console.log('Datos recibidos en editar:', data);
      });
    } else if (this.typeSingle == 'create') {
      this.typeFinal = 'Crear';
    } else {
      this.router.navigate(['emails']);
    }
  }

  getValuesForm(field: string): any {
    return this.newsletterData.get(`${field}`)?.value;
  }

  setDataValues(key: string, value: string | number): void {
    const dataCurrent = this.newsletterData.value;

    this.newsletterData.patchValue({
      ...dataCurrent,
      [key]: value,
    });
  }

  saveNewsletter(): void {
    const dataCurrent = this.newsletterData.value;
    console.log('datos enviados: ', dataCurrent);

    const dataFinal = {
      ...dataCurrent,
      attachments: this.dataAttachments,
    };

    if (this.typeSingle == 'create') {
      this.newsletterService.createNewsletter(dataFinal).subscribe({
        next: (data) => {
          console.log('RESULTADO DE LA CREACION: ', data);
          this.router.navigate(['emails']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
    if (this.typeSingle == 'edit') {
      const dataFinaltoEdit = {
        ...dataFinal,
        id: this.data.id,
      };
      this.newsletterService.updateNewsletter(dataFinaltoEdit).subscribe({
        next: (data) => {
          console.log('RESULTADO DE LA EDICION: ', data);
          this.router.navigate(['emails']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  controlAttachments(event: any) {
    console.log('Archivo cargado: ', event.target.files);
    const file = event.target.files[0];

    let dataBase64 = null;

    // Encode the file using the FileReader API
    const reader = new FileReader();
    reader.onloadend = () => {
      dataBase64 = reader?.result
        ?.toString()
        .replace('data:', '')
        .replace(/^.+,/, '');

      const attachmentFinalData = {
        name: file.name,
        type: file.type,
        data: dataBase64,
      };

      this.dataAttachments.push(attachmentFinalData);
      console.log('dataAttachments: ', this.dataAttachments);
    };
    reader.readAsDataURL(file);

    const size = (file.size / 1048576).toFixed(2) + ' MB';

    console.log('size: ', size);
  }

  deleteAtachment(attachment: any) {
    const index = this.dataAttachments.indexOf(attachment);
    this.dataAttachments.splice(index, 1);
  }

  sendNewsletter(): void {
    const id = this.data.id;
    this.newsletterService.sendNewsletter(id).subscribe({
      next: (data) => {
        console.log('RESULTADO DE LA ENVIO a los SUBS: ', data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
