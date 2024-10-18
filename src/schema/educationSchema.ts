import { z } from 'zod';

export const educationSchema = z.object({
  education: z.array(
    z.object({
      institute_name: z
        .string()
        .min(1, { message: 'Institute name is required' })
        .regex(/^[^\d]+$/, {
          message: 'Institute name should not contain any numbers',
        }),
      course: z.string().min(1, { message: 'Course is required' }),
      start_date: z.string().min(1, { message: 'Start date is required' }),
      end_date: z
        .string()
        .optional(),  // End date is optional when currently is true
      currently: z.boolean().default(false),
      result: z.string().min(1, { message: 'Result is required' }),
      result_type: z.string().min(1, { message: 'Result type is required' }),
      type: z.string().min(1, { message: 'Type is required' }),
      specialization: z.string().min(1, { message: 'Specialization is required' }),
    }).superRefine((data, ctx) => {
      // If not currently pursuing, end date should be present and after start date
      if (!data.currently) {
        if (!data.end_date) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'End date is required if not currently pursuing',
            path: ['end_date'],
          });
        } else if (new Date(data.end_date) <= new Date(data.start_date)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'End date must be after the start date',
            path: ['end_date'],
          });
        }
      }
    })
  ),
});
